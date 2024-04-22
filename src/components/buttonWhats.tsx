import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { ComponentProps } from "react";



interface ButtonProps extends ComponentProps<'button'>  {
    animate?: boolean;
    text: string
}
export function ButtonWhats({ animate, text, ...props }: ButtonProps){
    return(
        <a href="https://wa.me/+5551992271964" target="_blank">
            <Button variant="secondary" {...props} className={animate ? " rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-base font-helvetica-1 animate-bounce" : " rounded-xl bg-lime-500 w-60 p-7 hover:bg-lime-600 text-zinc-900 text-base font-helvetica-2"}><ShoppingCart className="mr-2 w-5"/>{text}</Button>
        </a>
    )
}

