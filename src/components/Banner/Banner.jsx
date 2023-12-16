import img1 from "./../../assets/biryani5.png"
import { IoFastFood } from "react-icons/io5"
import { GrSecure } from "react-icons/gr"
import { GiFoodTruck } from "react-icons/gi"
const Banner = () => {
    return (
        <div className="min-h-[550px] py-10 bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="">
                <div
                    data-aos="slide-up"
                    data-aos-duration="300"
                    className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Image */}
                        <div className="">
                            <img src={img1} className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]" alt="" />
                        </div>
                        {/* text-content-section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
                            <h3 className="text-3xl sm:text-4xl font-bold">
                                Lorem, ipsum dolor.
                            </h3>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.</p>
                                <div className="flex gap-6">
                                    <div className="">
                                        <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                                    </div>
                                    <div className="">
                                        <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                    </div>
                                    <div className="">
                                        <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                    </div>
                                </div>
                                <div className="">
                                    <button className="bg-gradient-to-r from-primary to-second text-white px-6 py-3 rounded-full hover:scale-105 duration-200">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default Banner