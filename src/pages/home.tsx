import { Button } from "@/components/ui/button"
import produto from "../assets/produto3.jpeg"
import { ShoppingCart } from "lucide-react"
export function Home(){
    return(
        <div className=" w-full  bg-fitbg">
            <section className="flex flex-col gap-4 pb-4 relative">
                <img src={produto} alt="" className=" sm:rounded-xl sm:w-[440px] w-full"/>
                <div className="absolute flex flex-col w-full items-center top-6 left-20 text-zinc-950 font-semibold font-H">
                    <h1 className="text-4xl mb-2">Tudo em um</h1>
                    <h2 className="text-2xl">Proteína</h2>
                    <h2 className="text-2xl">Creatina</h2>
                    <h2 className="text-2xl">Fibras</h2>
                </div>
                <div className="flex flex-col items-center gap-4 px-8">
                    <p className="text-slate-100 text-center text-sm">Nosso mix de proteínas foi feito para você que não tem tempo para uma refeição balanceada devido a correria do dia a dia!</p>
                    <a href="https://w.app/Fitprotein" target="_blank">
                        <Button variant="secondary" className=" rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-base"><ShoppingCart className="mr-2 w-5"/>Garanta já o seu!</Button>
                    </a>
                </div>
             </section>   
        </div>
    )
}