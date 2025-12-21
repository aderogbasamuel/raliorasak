import Image from "next/image";

export default function Header() {
    return (
        <div
            className="h-screen bg-center flex items-center flex-col py-10 px-4 sm:px-10"
            style={{ backgroundImage: "url('/Frame 1321317766.svg')" }}
        >
            <h1 className="text-3xl sm:font-4xl font-bold bg-gradient-to-r from-[#BF30CC] to-[#5531C1] bg-clip-text text-transparent text-center font-matter">Solving business problems using Human Centred, Research/Data driven & Agile techniques</h1>
            <div className=" flex relative flex-col items-center justify-center">
                <div className="absolute z-10 flex flex-col gap-3"> 
                    <div className="flex justify-between">
                        <Image src={'Group 1171278622.svg'} width={320} height={140} alt="statistics" className="w-[40%]"/>
                        <Image src={'Group 1171278623.svg'} width={320} height={140} alt="statistics" className="w-[40%]"/>
                    </div>
                    <div className="flex justify-between">
                        <Image src={'Group 1171278624.svg'} width={320} height={140} alt="statistics" className="w-[40%]"/>
                        <Image src={'Group 1171278625.svg'} width={320} height={140} alt="statistics" className="w-[40%]"/>
                    </div>
                </div>
                <div>
                    <Image src={'hero.svg'} width={440} height={770} className="w-full max-w-[400px] border" alt='hero image'/>
                </div>
            </div>
        </div>
    )
}