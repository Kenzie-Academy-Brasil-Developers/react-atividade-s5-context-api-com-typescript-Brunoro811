import {  ReactNode } from "react"
import {CartProviders} from "./Cart"

interface ProvidersProps{
    children: ReactNode;
}
const Providers = ({children}: ProvidersProps) =>{
    return(
        <CartProviders>
            {children}
        </CartProviders>
    )
}
export default Providers;