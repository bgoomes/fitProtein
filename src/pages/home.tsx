
import { ButtonWhats } from "@/components/buttonWhats"
import produto from "../assets/produto3.png"
import video from "../assets/video/video.mp4"

export function Home(){
    return(
        <div className=" w-full  bg-fitbg">
            <section className="flex flex-col sm:items-center gap-4 pb-4 relative">
                <img src={produto} alt="" className=" sm:rounded-xl sm:w-[440px] hidden"/>
                <video autoPlay loop muted playsInline className="sm:w-[400px] w-full"><source src={video} type="video/mp4" /></video>
                <div className="flex flex-col items-center gap-4 px-8">
                    <p className="text-slate-100 text-center text-sm font-Ps">Nosso mix de proteínas foi feito para você que não tem tempo para uma refeição balanceada devido a correria do dia a dia!</p>
                    <ButtonWhats  text="Garanta já o seu!" />
                </div>
             </section>   
        </div>
    )
}