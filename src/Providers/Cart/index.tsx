import {createContext,ReactNode,useContext,useState} from "react"


interface Product{
    id:number;
    title: string;
    description:string;
    price:number;
    image:string;
}
interface CartProps{
    children: ReactNode;
}
interface CartProvidersData{
    cart: Product[]; //cart é um array de produtos
    addProduct: (product:Product)=>void; // é uma funcao que recebe um Produts que retorna vazio ou nao tem retorno
    deletProduct:(productToBeDeleted:number)=>void; // é uma funcao que recebe um Produts que retorna vazio ou nao tem retorno
}
 const CartContext = createContext<CartProvidersData>({} as CartProvidersData);
export const CartProviders = ({children}:CartProps) =>{
    
    const [cart,setCart] = useState<Product[]>([]) 
    const addProduct = (product:Product) =>{
        setCart([...cart,product])
    }   
    const deletProduct = (productToBeDeleted: number) =>{
        const newCart = cart.filter(
            (product,index) => index !== productToBeDeleted
          );
        setCart(newCart)
    }  
    return(
        <CartContext.Provider value={{cart,addProduct,deletProduct}} >
            {children}
        </CartContext.Provider>
    ) 
}
export const useCart = () =>useContext(CartContext)