
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import produto from "../assets/produto1.jpeg"
import produto2 from "../assets/produto2.jpeg"
import produto3 from "../assets/produto6.jpeg"
import produto4 from "../assets/produto.jpeg"
import produto5 from "../assets/produto5.jpeg"
import { ButtonWhats } from "@/components/buttonWhats"


export function Product(){
    
    return(
        <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full pb-8 sm:p-8 bg-slate-200">
            <section className="w-full max-w-6xl ">
            <Carousel plugins={[
                            Autoplay({
                            delay: 2750,
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
            <ButtonWhats animate text="Garanta já o seu!" />
            
            
        </div>
    )
}