import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.png"

export function Footer(){
    return(
        <footer className="w-full h-60 bg-fitbg shadow-2xl shadow-fitbg">
          
          

           <div className="flex flex-col items-center justify-center p-10">
                
                <nav className="flex gap-3">
                    <a href="https://www.instagram.com/fitproten?igsh=MXV5MTRreG5hem9kcA==" target="_blank"><FaInstagram  size={32} className="text-slate-300"/></a>
                    {/* <a href="#" target="_blank"><FaFacebook size={24} className="text-slate-300"/></a> 
                    <a href="#" target="_blank"><FaYoutube size={24} className="text-slate-300"/></a>  */}
                </nav>
                <img src={Logo} alt="" className=" w-24" />
           </div>
            <div className="flex sm:flex-row flex-col gap-2 px-8 justify-between max-w-7xl m-auto items-center">
                <p className=" text-slate-500 text-xs">© 2024 FitProtein - Todos os diretiros reservados!</p>
               
                <p className="text-slate-100/10 font-light text-xs">Desenvolvido por <a href="https://obrunogomes.vercel.app/" target="_blank">@obrunogomesreal</a></p>
            </div>
         
        </footer>
    )
}