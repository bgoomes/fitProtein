import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export function Footer(){
    return(
        <footer className="w-full h-40 bg-fit-bg shadow-2xl shadow-white">
          

           <div className="flex flex-col items-center justify-center p-10">
                
                <nav className="flex gap-3">
                    <a href="#" target="_blank"><FaInstagram  size={24} className="text-slate-300"/></a>
                    <a href="#" target="_blank"><FaFacebook size={24} className="text-slate-300"/></a> 
                    <a href="#" target="_blank"><FaYoutube size={24} className="text-slate-300"/></a> 
                </nav>
           </div>
            <div className="flex flex-row px-8 justify-between max-w-7xl m-auto">
                <p className=" text-slate-500 text-xs">© 2024 FitProtein - Todos os diretiros reservados!</p>
                <p className="text-slate-100/10 font-light text-xs">Desenvolvido por <a href="https://obrunogomes.vercel.app/" target="_blank">@obrunogomesreal</a></p>
            </div>
         
        </footer>
    )
}