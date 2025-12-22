export default function Experience(){
    return(
        <div className="w-full border py-[150px] bg-[#F9F9F9] flex flex-col items-center px-4">
            <h1 className="text-center text-4xl sm:text-6xl font-bold bg-gradient-to-r to-[#BF30CC] from-[#5531C1] bg-clip-text text-transparent text-center font-matter">
                My time behind <br/> various desks
            </h1>
            <p className="text-lg text-black max-w-lg mt-10 text-[#2E2251] text-center">I am wanted mostly for my creative skills which knows no bound, adding me to a team of creatives is one decision many brands has made and loved it entirely.</p>
            <div className="text overflow-scroll noscrollbar">
                {[
                    {
                        img: "null",
                        product: "",
                        role: "",
                        year: ""
                    }
                ].map((item, i)=>(
                    <div key={i}>

                    </div>
                ))}
            </div>
        </div>
    )
}