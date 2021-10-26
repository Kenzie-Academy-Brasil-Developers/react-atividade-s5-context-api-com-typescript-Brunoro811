import "./style.css"
function  Card ({img="",name="",price=0,isRemoved=false,callback,param}){
    return(
        <ul className="ContainerCard">
            <li><img className="img" src={img} alt={name} /></li>
            <li>{name}</li>
            <li>{price}</li>
            {!isRemoved &&
            <li>
                <button onClick={()=>callback(param)} className="Button Primary">Adicionar</button>
            </li>
            }
            {isRemoved &&
            <li>
                <button onClick={()=>callback(param)} className="Button Secundary">Remover</button>
            </li>
            }
        </ul>
    )
}
export default Card;