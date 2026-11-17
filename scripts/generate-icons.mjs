import fs from 'fs';
import path from 'path';
import { parseArgs } from 'util';

const options = {
    src: { type: 'string', short: 's' },
    dist: { type: 'string', short: 'd' },
};

const { values } = parseArgs({ options, strict: false });

const srcDirInput = values.src || 'src/assets/svg';
const distDirInput = values.dist || 'src/components/ui/icons';

const SVG_DIR = path.resolve(process.cwd(), srcDirInput);
const DIST_DIR = path.resolve(process.cwd(), distDirInput);
const MAP_FILE = path.join(DIST_DIR, 'index.tsx');

if (!fs.existsSync(SVG_DIR)) {
    console.error(`❌ Ошибка: Исходная папка "${srcDirInput}" не найдена!`);
    process.exit(1);
}

if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
}

const files = fs.readdirSync(SVG_DIR).filter(file => file.endsWith('.svg'));

if (files.length === 0) {
    console.warn(`⚠️ Предупреждение: В папке "${srcDirInput}" нет SVG файлов.`);
    process.exit(0);
}

// Чистый PascalCase для имени компонента и TSX файла (без дефисов)
const toPascalCase = (str) => {
    return str
        .replace(/[-_]+(.)/g, (_, letter) => letter.toUpperCase())
        .replace(/[-_]/g, '')
        .replace(/^[a-z]/, (g) => g.toUpperCase());
};

// Чистый camelCase для ключа в iconMap (например, "homeHeroBg")
const toCamelCaseKey = (str) => {
    return str
        .replace(/[-_]+(.)/g, (_, letter) => letter.toUpperCase())
        .replace(/[-_]/g, '')
        .replace(/^[A-Z]/, (g) => g.toLowerCase());
};

let indexImports = `import { SVGProps } from 'react';\n`;
let mapEntries = `export const iconMap = {\n`;

files.forEach(file => {
    const rawName = path.basename(file, '.svg');
    const componentName = toPascalCase(rawName);
    const cleanKeyName = toCamelCaseKey(rawName);
    const componentFileName = `${componentName}.tsx`;
    const componentFilePath = path.join(DIST_DIR, componentFileName);

    let svgContent = fs.readFileSync(path.join(SVG_DIR, file), 'utf8');

    // 1. Базовая очистка и подстановка пропсов
    svgContent = svgContent
        .trim()
        .replace(/<svg/, `<svg className={props.className} {...props}`)
        
        // 2. Ловим стандартные хекс-коды цветов (#fff, #000000)
        .replace(/fill="#[a-zA-Z0-9]+"/g, 'fill="currentColor"')
        .replace(/stroke="#[a-zA-Z0-9]+"/g, 'stroke="currentColor"')
        
        // 3. 🔥 УЛУЧШЕНИЕ: Ловим текстовые цвета (white, black), но строго игнорируем none и currentColor
        .replace(/fill="(?!none|currentColor)[a-zA-Z]+"/g, 'fill="currentColor"')
        .replace(/stroke="(?!none|currentColor)[a-zA-Z]+"/g, 'stroke="currentColor"');

    // 4. Универсальный авто-перевод остальных атрибутов в camelCase для React (fill-rule -> fillRule)
    svgContent = svgContent.replace(/([a-z]+)-([a-z]+)=/g, (_, p1, p2) => {
        return `${p1}${p2.charAt(0).toUpperCase()}${p2.slice(1)}=`;
    });

    // 5. Исправление нестандартных парных тегов Figma (<clip-path> -> <clipPath>)
    svgContent = svgContent
        .replace(/<clip-path/g, '<clipPath')
        .replace(/<\/clip-path/g, '</clipPath');

    const iconFileContent = `import { SVGProps } from 'react';

export default function ${componentName}(props: SVGProps<SVGSVGElement>) {
    return (
        ${svgContent}
    );
}
`;

    fs.writeFileSync(componentFilePath, iconFileContent);

    indexImports += `import ${componentName} from './${componentName}';\n`;
    mapEntries += `    '${cleanKeyName}': ${componentName},\n`;
});

mapEntries += `} as const;\n\nexport type IconName = keyof typeof iconMap;\n`;

const dynamicComponent = `
interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
    const Component = iconMap[name];
    if (!Component) return null;
    return <Component {...props} />;
}
`;

let indexContent = `${indexImports}\n${mapEntries}${dynamicComponent}`;

fs.writeFileSync(MAP_FILE, indexContent);

console.log(`\n🚀 Успех! Скрипт обновлен и полностью перевел все цвета (включая текстовые) в currentColor!`);
console.log(`📁 Исходники SVG:  ${srcDirInput}`);
console.log(`📂 Папка компонентов: ${distDirInput}/\n`);