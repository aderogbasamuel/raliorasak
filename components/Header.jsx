import Image from "next/image";

export default function Header() {
    return (
        <div>
        <div
            className="min-h-screen bg-center flex items-center flex-col py-16 px-4 sm:px-10"
            style={{ backgroundImage: "url('/Frame 1321317766.svg')" }}
        >
            <h1 className="text-4xl sm:text-6xl max-w-3xl font-bold bg-gradient-to-r from-[#BF30CC] to-[#5531C1] bg-clip-text text-transparent text-center font-matter">Solving business problems using Human Centred, Research/Data driven & Agile techniques</h1>
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
                    <Image src={'hero.svg'} width={400} height={700} className="w-full max-w-[400px]" alt='hero image'/>
                </div>
            </div>
        </div>
        <div className="h-screen w-screen relative -mt-[5%] flex items-center justify-center">
            
        <Image
    src="/image 114.svg"
    alt="Background"
    fill
    className="object-cover"
  />
  <div className="relative z-10 max-w-4xl flex flex-col items-center gap-10">
                
                <div className="flex gap-3">
                    {["critical thinking", "problem solving", "team work", "communication"].map((item,i)=>(
                        <p key={i} className="bg-[#F0EEF3] border border-[#A598D0] font-500 text-[24px] px-6 py-3 text-black rounded-full capitalize font-matter">{item}</p>
                    ))}
                </div>
                <div className="rounded-[30px] p-16"
                
                style={{
                    background:
                      "linear-gradient(132.19deg, #BF30CC -63.53%, #5531C1 57.41%)",
                  }}
                  >
                        <p className="text-xl">As a strategic Senior Product Designer, my work is a fusion of creative leadership and hands-on execution. I apply a mix of human-centered, research/data-driven, and agile techniques to design experiences that are not only delightful for users but also drive significant business impact. With a background as the Head of Product Design at Motoka app and a Senior Product Designer at Repeatra, I specialize in building and scaling products that serve a global audience.</p>
                </div>
                </div>
            
        </div>
        </div>
    )
}