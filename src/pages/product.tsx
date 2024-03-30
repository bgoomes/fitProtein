import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { ShoppingCart } from "lucide-react"
import produto from "../assets/WhatsApp Image 2024-03-17 at 09.38.13 (1).jpeg"
export function Product(){
    return(
        <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full p-5 bg-fitbg">
            <section className="w-full max-w-4xl">
            <Carousel className="w-full max-w-4xl">
                <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div>
                            <img src={produto} alt="Produto" className=" rounded-xl" />
                        </div>
                    </CarouselItem>
                 ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </section>
            <Button variant="secondary" className=" rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-xl"><ShoppingCart className="mr-2 w-5"/>Garanta já o seu!</Button>
        </div>
    )
}