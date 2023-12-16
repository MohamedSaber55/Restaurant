import serviceImg from "./../../assets/biryani2.png"

const services = [
    {
        id: 1,
        img: serviceImg,
        name: "Biryani",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cumque eius voluptates?"
    },
    {
        id: 2,
        img: serviceImg,
        name: "Chicken Kari",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cumque eius voluptates?"
    },
    {
        id: 3,
        img: serviceImg,
        name: "Ice Coffee",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cumque eius voluptates?"
    },
]

const Services = () => {
    return (
        <div className="py-10 bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-second">Our Services</p>
                    <h2 className="text-3xl font-bold">Services</h2>
                    <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos deserunt iste. Numquam voluptatum in pariatur reprehenderit quasi hic asperiores.</p>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-5 place-items-center ">
                    {services?.map(service => {
                        return (
                            <div key={service.id} data-aos="zoom-in" data-aos-duration="300" className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white duration-300 shadow-xl">
                                <div className="h-[100px]">
                                    <img src={service.img} className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" alt="" />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold">{service.name}</h3>
                                    <p className="text-gray-500 group-hover:text-white duration-300  text-sm line-clamp-2">{service.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services