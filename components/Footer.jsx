

export default function Footer() {
    return (
        <div
            style={{
                background: "linear-gradient(202.67deg, #BF30CC -106.26%, #50256E -0.67%, #2E2251 47.14%)",

            }}
            className="flex flex-col items-center py-40 gap-6"
        >
            <p className="font-normal text-[#C171FF] text-2xl">Thanks for your time</p>
            <h2 className="text-4xl sm:text-8xl text-white font-bold text-center">Let’s Get to Work</h2>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
                <button className="w-[220px] border-white border-2 py-3 px-3 rounded-lg font-medium">Download my Resume</button>
                <button className="w-[220px] py-3 px-3 rounded-lg bg-[#5531C1] font-medium">Hire Me</button>
            </div>
        </div>
    )
}