import { Button } from "@/components/ui/button"
import produto from "../assets/produto3.jpeg"
import { ShoppingCart } from "lucide-react"
export function Home(){
    return(
        <div className=" w-full  bg-fitbg">
            <section className="flex flex-col sm:items-center gap-4 pb-4 relative">
                <img src={produto} alt="" className=" sm:rounded-xl sm:w-[440px] w-full"/>
                <div className="absolute flex flex-col items-end  top-4 right-8 text-zinc-950 font-semibold font-H">
                    <h1 className="text-5xl font-bold mb-6">Tudo em um</h1>
                    <h2 className="text-4xl">Proteína</h2>
                    <h2 className="text-4xl">Creatina</h2>
                    <h2 className="text-4xl">Fibras</h2>
                </div>
                <div className="flex flex-col items-center gap-4 px-8">
                    <p className="text-slate-100 text-center text-sm font-Ps">Nosso mix de proteínas foi feito para você que não tem tempo para uma refeição balanceada devido a correria do dia a dia!</p>
                    <a href="https://wa.me/+5551992271964" target="_blank">
                        <Button variant="secondary" className=" rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-base font-Ps"><ShoppingCart className="mr-2 w-5"/>Garanta já o seu!</Button>
                    </a>
                </div>
             </section>   
        </div>
    )
}