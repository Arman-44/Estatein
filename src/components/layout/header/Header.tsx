import NavBar from "./components/NavBar";
import NotificationBanner from "./components/NotificationBanner";



export default function Header() {

    return (
        <header className="w-full bg-gray-10">
            <NotificationBanner />
            <div className="container">
                <NavBar />
            </div>
        </header>
    )
}