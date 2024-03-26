import imgLogo from "../assets/imglogo.png"

export function Home(){
    return(
        <div className="flex-1 flex gap-10 w-full h-svh">
            <div className="text-slate-300 flex m-auto">
                <img src={imgLogo} alt="" className="w-[600px] " />
                <h1 className=" text-slate-300 text-6xl">FitProtein</h1>
            </div>
            
        </div>
    )
}