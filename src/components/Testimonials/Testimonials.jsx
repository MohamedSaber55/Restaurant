import Slider from "react-slick/lib/slider"
import test1 from "./../../assets/258.jpg"
import test2 from "./../../assets/319.jpg"
import test3 from "./../../assets/907.jpg"

const testimonialsData = [
    {
        id: 1,
        name: "Mohamed",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit obcaecati placeat, nobis praesentium ipsa molestias.",
        img: test1
    },
    {
        id: 2,
        name: "Kareem",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit obcaecati placeat, nobis praesentium ipsa molestias.",
        img: test2
    },
    {
        id: 3,
        name: "Ahmed",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit obcaecati placeat, nobis praesentium ipsa molestias.",
        img: test3
    },
]



const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <div data-aos="fade-up" data-aos-duration="300" className="py-10 bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-second">Testimonials</p>
                    <h2 className="text-3xl font-bold">Testimonials</h2>
                    <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos deserunt iste. Numquam voluptatum in pariatur reprehenderit quasi hic asperiores.</p>
                </div>
                {/* Section */}
                <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
                    <Slider {...settings}>
                        {/* Item 1 */}
                        {testimonialsData?.map(item => {
                            return (
                                <div key={item.id} className="my-6">
                                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 dark:bg-gray-800 relative">
                                        <img src={item.img} className="rounded-full block mx-auto " alt="" />
                                        <p className="text-gray-500 text-sm ">{item.text}</p>
                                        <h5 className="text-xl font-bold">{item.name}</h5>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
