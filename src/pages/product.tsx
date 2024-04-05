import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

import { ShoppingCart } from "lucide-react"
import produto from "../assets/produto1.jpeg"
import produto2 from "../assets/produto2.jpeg"
import produto3 from "../assets/produto6.jpeg"
import produto4 from "../assets/produto.jpeg"
import produto5 from "../assets/produto5.jpeg"


export function Product(){
    
    return(
        <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full sm:p-8 bg-slate-200">
            <section className="w-full max-w-6xl mt-2">
            <Carousel plugins={[
                            Autoplay({
                            delay: 2000,
                            stopOnInteraction: false, 
                            }),
                      ]} 
                      
                    className="w-full max-w-6xl">
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div>
                            <img src={produto} alt="Produto"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div>
                            <img src={produto2} alt="Produto"  />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div>
                            <img src={produto3} alt="Produto"  />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div>
                            <img src={produto4} alt="Produto"  />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div>
                            <img src={produto5} alt="Produto"  />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex"/>
                <CarouselNext  className="hidden sm:flex" />
            </Carousel>
            </section>
            <a href="https://w.app/Fitprotein" target="_blank">
                <Button variant="secondary" className=" rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-base animate-bounce"><ShoppingCart className="mr-2 w-5"/>Garanta já o seu!</Button>
            </a>
            
        </div>
    )
}