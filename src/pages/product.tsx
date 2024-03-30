import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { ShoppingCart } from "lucide-react"
export function Product(){
    return(
        <div className="flex-1 flex flex-col gap-4 items-center justify-center w-full h-60 p-5 bg-fitbg">
            <section className="w-full max-w-4xl">
            <Carousel className="w-full max-w-4xl">
                <CarouselContent className="h-32">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 bg-white h-32 rounded-sm">
                            <h1>teste</h1>
                        </div>
                    </CarouselItem>
                 ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </section>
            <Button variant="secondary"><ShoppingCart  className="mr-2 h-4 w-4"/>Whats</Button>
        </div>
    )
}