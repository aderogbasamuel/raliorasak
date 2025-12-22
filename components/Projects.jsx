import Image from "next/image"
export default function Projects() {
    return (
        <div className="bg-white py-24 flex flex-col items-center">
            <h3 className="capitalize bg-[#F9F9F9] text-[#15154F70] font-normal rounded-full text-xl w-fit py-2 px-6">my top case studies</h3>
            {/* Luceo */}
            {/* desktop */}


            <div className="hidden sm:block pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col sm:flex-row justify-start sm:pe-32">
                        <div className="w-full sm:w-1/2 sm:-left-[15%]">
                            <Image
                                src={'/project1.svg'}
                                fill
                                alt="Luceo preview"
                                priority
                                className="w-[300px]  sm:w-fit block sm:absolute h-[500px]  object-fit left-0 sm:-top-24 sm:flex-shrink-0 -translate-x-[30%]"
                            />
                        </div>
                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#6F34F8] text-5xl font-[800]">Luceo</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">Live</p>
                            </div>
                            <p className="text-[#15154F] pt-12">The platform was designed to be both intuitive and robust, successfully being used by over 100,000 applicants for state examinations without any issues. This project demonstrates my ability to solve a critical user problem by seamlessly bridging educational theory with user-centered design to create a highly effective and stable product.</p>
                            <div className="flex gap-3 pt-5">
                                <button className="bg-[#7355E3] text-white text-sm sm:text-lg rounded-full p-1 px-6">Live</button>
                                <button className="bg-[#41327B38] text-[#2E2251] text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                            </div>
                            <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="block sm:hidden pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col-reverse sm:flex-row justify-start sm:pe-32">
                        <div className=" sm:w-1/2 pe-2 sm:pe-0 relative">
                            <Image
                                src="/project1.svg"
                                width={400}
                                height={300}
                                className="sm:absolute sm:fill object-contain"
                            />

                        </div>
                        <div className="pt-24 pb-6 sm:py-24  px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#6F34F8] text-5xl font-[800]">Luceo</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">Live</p>
                            </div>
                            <p className="text-[#15154F] pt-12">The platform was designed to be both intuitive and robust, successfully being used by over 100,000 applicants for state examinations without any issues. This project demonstrates my ability to solve a critical user problem by seamlessly bridging educational theory with user-centered design to create a highly effective and stable product.</p>
                            <div className="flex gap-3 pt-5">
                                <button className="bg-[#7355E3] text-white text-sm sm:text-lg rounded-full p-1 px-6">Live</button>
                                <button className="bg-[#41327B38] text-[#2E2251] text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                            </div>
                            <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* motoka */}
            {/* desktop */}
            <div className="hidden sm:block pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col sm:flex-row justify-start sm:ps-32">
                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#248CE2] text-5xl font-[800]">Motoka</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Testing</p>
                            </div>
                            <p className="text-[#15154F] pt-12">
                                The platform&apos;s goal was to make car ownership more manageable and less stressful for users across the country. By developing an intuitive, centralized solution with AI-powered features for auto-renewal and faster sign-ups, this project demonstrates my ability to take a leadership role in tackling complex, real-world problems and creating impactful products that simplify users&apos; lives.
                            </p>
                            <div className="flex gap-3 pt-5">
                                <button className="bg-[#248CE2] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                                <button className="bg-[#E2D3C2] text-[#2E2251] text-sm sm:text-lg rounded-full p-1 px-6">Live</button>
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                        <div className="w-full sm:w-1/2 sm:-right-[15%]">
                            <Image
                                src={'/Artboard.svg'}
                                fill
                                alt="Luceo preview"
                                priority
                                className="w-fit block sm:absolute  object-fit right-0 sm:-top-24 flex-shrink-0 translate-x-[30%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col sm:flex-row justify-start sm:ps-32">
                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#248CE2] text-5xl font-[800]">Motoka</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Testing</p>
                            </div>
                            <p className="text-[#15154F] pt-12">
                                The platform&apos;s goal was to make car ownership more manageable and less stressful for users across the country. By developing an intuitive, centralized solution with AI-powered features for auto-renewal and faster sign-ups, this project demonstrates my ability to take a leadership role in tackling complex, real-world problems and creating impactful products that simplify users&apos; lives.
                            </p>
                            <div className="flex gap-3 pt-5">
                                <button className="bg-[#248CE2] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                                <button className="bg-[#E2D3C2] text-[#2E2251] text-sm sm:text-lg rounded-full p-1 px-6">Live</button>
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                        {/* <div className="w-full sm:w-1/2 sm:-right-[15%]">
                            <Image
                                src={'/Artboard.svg'}
                                fill
                                alt="Luceo preview"
                                priority
                                className="w-fit block sm:absolute  object-fit right-0 sm:-top-24 flex-shrink-0 translate-x-[30%]"
                            />
                        </div> */}
                        <div className=" sm:w-1/2 ps-2 sm:pe-0 relative">
                            <Image
                                src="/Artboard.svg"
                                width={400}
                                height={300}
                                className="sm:absolute sm:fill object-contain"
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* giftapp */}
            <div className="hidden sm:block pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col sm:flex-row justify-start sm:pe-32">
                        <div className="w-full sm:w-1/2 sm:-left-[15%]">
                            <Image
                                src={'/Screenshot 2024-05-29 133120 2.svg'}
                                fill
                                alt="Luceo preview"
                                priority
                                className="w-fit block sm:absolute  object-fit left-0 sm:-top-24 flex-shrink-0 -translate-x-[30%]"
                            />
                        </div>
                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#D9455F] text-5xl font-[800]">GiftApp</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Development</p>
                            </div>
                            <p className="text-[#15154F] pt-12">By simplifying the process of thoughtful gifting, the application not only helps users remember important dates but also empowers them to foster stronger personal connections. This project demonstrates my ability to design an experience that is both highly functional and deeply valuable to the user.</p>
                            <div className="flex gap-3 pt-5">
                                {/* <button className="bg-[#7355E3] text-white text-sm sm:text-lg rounded-full p-2 px-6">Live</button> */}
                                <button className="bg-[#D9455F] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="block sm:hidden pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col-reverse sm:flex-row justify-start sm:pe-32">
                        <div className=" sm:w-1/2 pe-2 sm:pe-0 relative">
                            <Image
                                src={'/Screenshot 2024-05-29 133120 2.svg'}
                                // src="/project1.svg"
                                width={400}
                                height={300}
                                className="sm:absolute sm:fill object-contain"
                            />

                        </div>
                        <div className="pt-24 pb-6 sm:py-24  px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#D9455F] text-5xl font-[800]">GiftApp</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Development</p>
                            </div>
                            <p className="text-[#15154F] pt-12">By simplifying the process of thoughtful gifting, the application not only helps users remember important dates but also empowers them to foster stronger personal connections. This project demonstrates my ability to design an experience that is both highly functional and deeply valuable to the user.</p>
                            <div className="flex gap-3 pt-5">
                                {/* <button className="bg-[#7355E3] text-white text-sm sm:text-lg rounded-full p-2 px-6">Live</button> */}
                                <button className="bg-[#D9455F] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* chitlink */}
            <div className="hidden sm:block pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col sm:flex-row justify-start sm:ps-32">

                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#BD882D] text-5xl font-[800]">Chitlink</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Testing</p>
                            </div>
                            <p className="text-[#15154F] pt-12">
                                Chitlink&apos;s design makes financial collaboration more accessible and less stressful. By providing a secure and transparent system, Chitlink builds trust among users and empowers them to fund their projects or achieve their saving goals collectively. The clear visual hierarchy and user-friendly interface encourage regular engagement and help users stay on track with their commitments.
                            </p>
                            <div className="flex gap-3 pt-5">
                                <button className="bg-[#BD882D] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                                {/* <button className="bg-[#E2D3C2] text-[#2E2251] text-sm sm:text-lg rounded-full p-1 px-6">Live</button> */}
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                        <div className="w-full sm:w-1/2 sm:-right-[0%]">
                            <Image
                                src={'/project4.svg'}
                                fill
                                alt="Luceo preview"
                                priority
                                className="w-fit block sm:absolute  object-fit right-0 sm:-top-24 flex-shrink-0 translate-x-[15%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col sm:flex-row justify-start sm:ps-32">

                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#BD882D] text-5xl font-[800]">Chitlink</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Testing</p>
                            </div>
                            <p className="text-[#15154F] pt-12">
                                Chitlink&apos;s design makes financial collaboration more accessible and less stressful. By providing a secure and transparent system, Chitlink builds trust among users and empowers them to fund their projects or achieve their saving goals collectively. The clear visual hierarchy and user-friendly interface encourage regular engagement and help users stay on track with their commitments.
                            </p>
                            <div className="flex gap-3 pt-5">
                                <button className="bg-[#BD882D] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                                {/* <button className="bg-[#E2D3C2] text-[#2E2251] text-sm sm:text-lg rounded-full p-1 px-6">Live</button> */}
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                        {/* <div className="w-full sm:w-1/2 sm:-right-[0%]">
                            <Image
                                src={'/project4.svg'}
                                fill
                                alt="Luceo preview"
                                priority
                                className="w-fit block sm:absolute  object-fit right-0 sm:-top-24 flex-shrink-0 translate-x-[15%]"
                            />
                        </div> */}
                        <div className=" sm:w-1/2 pe-2 sm:pe-0 relative">
                            <Image
                                src="/project4.svg"
                                width={400}
                                height={300}
                                className="sm:absolute sm:fill object-contain"
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* sleekeasy */}
            <div className="hidden sm:block pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col sm:flex-row justify-start sm:pe-32">
                        <div className="w-full sm:w-1/2 sm:-left-[15%]">
                            <Image
                                src={'/Mac Studio.svg'}
                                fill
                                alt="Luceo preview"
                                priority
                                className="w-fit block sm:absolute  object-fit left-0 sm:-top-24 flex-shrink-0 -translate-x-[25%]"
                            />
                        </div>
                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#985335] text-5xl font-[800]">Sleekeasy</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Development</p>
                            </div>
                            <p className="text-[#15154F] pt-12">Sleekeasy acts as a crucial link between beauty service providers and potential clients. By providing a streamlined solution for online booking and client outreach, the platform empowers beauty businesses to thrive in a competitive market and adapt to changing consumer behaviors.</p>
                            <div className="flex gap-3 pt-5">
                                {/* <button className="bg-[#7355E3] text-white text-sm sm:text-lg rounded-full p-2 px-6">Live</button> */}
                                <button className="bg-[#985335] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="block sm:hidden pt-12 px-4 sm:px-12 mt-12">
                <div className="relative pt-12 overflow-hidden rounded-b-3xl">
                    <div className="bg-[#F9F9F9] rounded-3xl flex flex-col-reverse sm:flex-row justify-start sm:pe-32">
                        <div className=" sm:w-1/2 pe-2 sm:pe-0 relative">
                            <Image
                                src="/Mac Studio.svg"
                                width={400}
                                height={300}
                                className="sm:absolute sm:fill object-contain"
                            />

                        </div>
                        <div className="py-24 px-3 sm:px-0 w-full sm:w-1/2">
                            <div className="flex gap-3 items-center">
                                <h3 className="text-[#985335] text-5xl font-[800]">Sleekeasy</h3>
                                <p className="bg-white rounded-full py-1 px-5 text-sm text-[#15154F70]">In Development</p>
                            </div>
                            <p className="text-[#15154F] pt-12">Sleekeasy acts as a crucial link between beauty service providers and potential clients. By providing a streamlined solution for online booking and client outreach, the platform empowers beauty businesses to thrive in a competitive market and adapt to changing consumer behaviors.</p>
                            <div className="flex gap-3 pt-5">
                                {/* <button className="bg-[#7355E3] text-white text-sm sm:text-lg rounded-full p-2 px-6">Live</button> */}
                                <button className="bg-[#985335] text-white text-sm sm:text-lg rounded-full p-1 px-6">View Case Study</button>
                            </div>
                            {/* <div className="grid grid-cols-2 sm:flex gap-3 pt-6">
                                <Image
                                    src={'Group 1171279513.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                                <Image
                                    src={'Group 1171279514.svg'}
                                    width={150}
                                    height={50}
                                    alt="Play store"
                                    className="sm:h-[50px] object-contain"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}