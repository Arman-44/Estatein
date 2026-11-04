import wadeWarenimg from '@/assets/users/wde-warren.png'
import emilieThomsonimg from '@/assets/users/Emilie-Thomson.png'
import jonMansimg from '@/assets/users/Jon-Mans.png'



export interface reviewItemsType {
    title: string,
    label: string,
    user: { name: string, avatar: string,country:string, city: string, }
    stars: string
}

export const revievItems:reviewItemsType[] = [
    {
        title: 'Exceptional Service!',
        label:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        stars:'',
        user:{
            name:'Wade Warren',
            avatar:wadeWarenimg.src,
            country:'Usa',
            city:'California'
        }
    },
    {
        title: 'Exceptional Service!',
        label:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        stars:'',
        user:{
            name:'Emilie Thomson',
            avatar:emilieThomsonimg.src,
            country:'Usa',
            city:'California'
        }
    },
    {
        title: 'Exceptional Service!',
        label:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        stars:'',
        user:{
            name:'Jon Mans',
            avatar:jonMansimg.src,
            country:'Usa',
            city:'California'
        }
    },
    {
        title: 'Exceptional Service!',
        label:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        stars:'',
        user:{
            name:'Wade Warren',
            avatar:wadeWarenimg.src,
            country:'Usa',
            city:'California'
        }
    },
]
