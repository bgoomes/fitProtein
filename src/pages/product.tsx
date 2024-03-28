import produto from "../assets/WhatsApp Image 2024-03-17 at 09.38.13 (2).jpeg"
export function Product(){
    return(
        <div className="flex-1 flex items-center justify-center w-full h-svh bg-fit-bg">
            <section className=" h-[500px] bg-gray-500 p-8 rounded-xl shadow-inner ">
                <img src={produto} alt="" className="w-80  "/>
            </section>
        </div>
    )
}