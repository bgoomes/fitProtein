
import { ButtonWhats } from "@/components/buttonWhats"
import produto from "../assets/1.png"


export function Home(){
    return(
        <div className=" w-full  bg-fitbg">
            <section className="flex flex-col sm:items-center gap-4 pb-4 relative">
                <img src={produto} alt="" className=" sm:rounded-lg  sm:shadow-md sm:shadow-fitbg/10 sm:w-[540px]"/>
                <h1 className="absolute bottom-[210px] left-6 text-7xl sm:text-9xl sm:bottom-[390px] sm:left-20 text-white font-helvetica">TUDO EM UM</h1>
                <div className="absolute bottom-[265px] left-6 text-3xl text-white sm:text-3xl sm:bottom-[490px] sm:left-20 flex sm:gap-6 font-helvetica">
                    <span>Proteína</span>
                    <span>-</span>
                    <span>Creatina</span>
                    <span>-</span>
                    <span>Fibras</span>
                </div>
                <div className="flex flex-col items-center gap-4 px-8">
                    <p className="text-slate-100 text-center text-sm font-helvetica-1">Nosso mix de proteínas foi feito para você que não tem tempo para uma refeição balanceada devido a correria do dia a dia!</p>
                    <ButtonWhats  text="Garanta já o seu!" />
                </div>
             </section>   
        </div>
    )
}