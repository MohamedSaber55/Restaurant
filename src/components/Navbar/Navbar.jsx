import DarkBtn from "../DarkBtn/DarkBtn"
import logo from "./../../assets/food-logo.png"
import { FaShoppingCart } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div className="">
                        <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                            <img src={logo} className="w-10" alt="Foodie Zone" />
                            Foodie
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="">
                            <DarkBtn />
                        </div>
                        <ul className="hidden sm:flex gap-4">
                            <li>
                                <a href="#" className="inline-block p-4 hover:text-primary">Home</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block p-4 hover:text-primary">About</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block p-4 hover:text-primary">Contact</a>
                            </li>
                        </ul>
                        <button className="bg-gradient-to-r from-primary to-second text-white px-4 py-1 rounded-full hover:scale-105 flex items-center gap-3">
                            Order
                            <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar