import video from "../assets/video/video.mp4"

export function Video(){
    return (
        <div className=" w-full bg-slate-200">
            <section className="flex flex-col sm:items-center">
                <video autoPlay loop muted playsInline className="sm:w-[400px] w-full"><source src={video} type="video/mp4" /></video>
           </section>   
        </div>     
    )   
}