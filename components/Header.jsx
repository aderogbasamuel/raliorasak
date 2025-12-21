import Image from "next/image";

export default function Header() {
    return (
        <div
            className="h-screen bg-center flex items-center flex-col py-16 px-4 sm:px-10"
            style={{ backgroundImage: "url('/Frame 1321317766.svg')" }}
        >
            <h1 className="text-3xl sm:text-5xl max-w-3xl font-bold bg-gradient-to-r from-[#BF30CC] to-[#5531C1] bg-clip-text text-transparent text-center font-matter">Solving business problems using Human Centred, Research/Data driven & Agile techniques</h1>
            <div className=" flex relative flex-col items-center justify-center w-full max-w-8xl border-red-900">
                <div className="absolute z-10 flex flex-col gap-3 w-full"> 
                    <div className="flex justify-between ">
                        <Image src={'Group 1171278622.svg'} width={320} height={140} alt="statistics" className="w-[40%] max-h-[100px]"/>
                        <Image src={'Group 1171278623.svg'} width={320} height={140} alt="statistics" className="w-[40%] max-h-[100px]"/>
                    </div>
                    <div className="flex justify-between">
                        <Image src={'Group 1171278624.svg'} width={320} height={140} alt="statistics" className="w-[40%] max-h-[100px]"/>
                        <Image src={'Group 1171278625.svg'} width={320} height={140} alt="statistics" className="w-[40%] max-h-[100px]"/>
                    </div>
                </div>
                <div>
                    <Image src={'hero.svg'} width={440} height={770} className="w-full max-w-[400px]" alt='hero image'/>
                </div>
            </div>
        </div>
    )
}