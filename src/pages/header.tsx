import Logo from "../assets/logo.png"

export function Header(){
    return (
        <header className="flex items-center justify-center w-full h-24 bg-fitbg ">
            <img src={Logo} alt="" className="w-64 mt-6" />
        </header>
    )
}