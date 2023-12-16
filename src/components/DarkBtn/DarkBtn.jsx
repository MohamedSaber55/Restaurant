import { useEffect, useState } from "react"
import dark from "./../../assets/dark-mode-button.png"
import light from "./../../assets/light-mode-button.png"
const DarkBtn = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            // element.setAttribute("class", "dark")
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [element.classList, theme]);


    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <>
            <div className="relative">
                <img src={dark} onClick={changeTheme} className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme == "dark"? "opacity-0":"opacity-100"}`} alt="" />
                <img src={light} onClick={changeTheme}  className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" alt="" />
            </div>
        </>
    )
}

export default DarkBtn