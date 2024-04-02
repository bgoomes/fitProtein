import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { ShoppingCart } from "lucide-react"
import produto from "../assets/WhatsApp Image 2024-03-17 at 09.38.13.jpeg"


export function Product(){
    return(
        <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full p-8 bg-slate-200">
            <section className="w-full max-w-6xl">
            <Carousel className="w-full max-w-6xl">
                <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div>
                            <img src={produto} alt="Produto" className=" rounded-xl" />
                        </div>
                    </CarouselItem>
                 ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex bg-transparent"/>
                <CarouselNext className="hidden sm:flex bg-transparent"/>
            </Carousel>
            </section>
            <a href="https://w.app/Fitprotein" target="_blank">
                <Button variant="secondary" className=" rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-base"><ShoppingCart className="mr-2 w-5"/>Garanta já o seu!</Button>
            </a>
            
        </div>
    )
}