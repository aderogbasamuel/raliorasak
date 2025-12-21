export default function Footer(){
    return (
        <div 
        style={{
            background: "linear-gradient(202.67deg, #BF30CC -106.26%, #50256E -0.67%, #2E2251 47.14%)",

        }}
        className="flex flex-col items-center py-10 gap-6"
        >
            <p className="font-medium text-[#C171FF] text-2xl">Thanks for your time</p>
            <h2 className="text-6xl text-white font-bold">Let’s Get to Work</h2>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
                <button className="w-[300px] border-white border-2 py-2 px-3 rounded-lg">Download my Resume</button>
                <button className="w-[300px] py-2 px-3 rounded-lg bg-[#5531C1]">Hire Me!</button>
            </div>
        </div>
    )
}