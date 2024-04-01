
import { Button } from "@/components/ui/button"
import produto from "../assets/produto3.jpeg"
import { ShoppingCart } from "lucide-react"
export function Home(){
    return(
        <div className=" w-full h-svh bg-fitbg">
            <section className="flex sm:flex-row flex-col gap-10 items-center justify-center max-w-5xl m-auto">
                <img src={produto} alt="" className=" sm:w-[450px] w-[300px] mt-8 sm:mt-0 rounded-xl"/>
                <div  className="hidden sm:flex flex-col items-center w-full text-slate-300">
                    <h1 className="sm:text-9xl">Já pediu</h1>
                    <h2 className="sm:text-9xl">o teu </h2>
                    <h2 className="sm:text-9xl">hoje?</h2>
                </div>
                <div className="sm:hidden">
                    <h1 className="text-slate-300 text-4xl ">Já pediu o teu hoje?</h1>
                </div>
                <div className="sm:hidden flex">
                   <Button variant="secondary" className="rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-xl"><ShoppingCart className="mr-2 w-5"/>Garanta já o seu!</Button>
                </div>          
            </section>
               
        </div>
    )
}