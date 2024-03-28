
import produto from "../assets/produto3.jpeg"
export function Home(){
    return(
        <div className="flex flex-1 flex-col items-center justify-center w-full h-svh relative bg-slate-200">
            <img src={produto} alt="" className=" w-[450px] rounded-xl"/>
            <div  className=" absolute flex flex-col items-start w-full gap-2 p-10">
                <h1 className="text-7xl text-slate-500">Lorem ipsum dolor sit amet  </h1>
                <h2 className="text-5xl text-slate-500">consectetur adipisicing elit.</h2>
                <h2 className="text-5xl">consectetur adipisicing elit.</h2>
                <h2 className="text-5xl">consectetur adipisicing elit.</h2>
            </div>
            
        </div>
    )
}