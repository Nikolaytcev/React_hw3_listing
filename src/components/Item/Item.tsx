import { ItemObject } from "../../models"

interface itemAlone {
    item: ItemObject
}


export const Item = ({ item }: itemAlone) => {

 return (
    <div className="item">
        <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage}></img>
            </a>
        </div>
        <div className="item-details">
            {item.title.length <= 50 ? <p className="item-title">{item.title}</p> :
            <p className="item-title">{item.title.slice(0, 51) + '...'}</p>}

            {item.currency_code === 'USD' ? 
            <p className="item-price">{'$' + item.price}</p> :
            item.currency_code === 'EUR' ?
            <p className="item-price">{'€' + item.price}</p> :
            <p className="item-price">{item.price + ' ' + item.currency_code}</p>}
            
            {item.quantity <= 10 ? <p className="item-quantity level-low">{item.quantity} left</p> :
            item.quantity > 20 ? <p className="item-quantity level-high">{item.quantity} left</p> :
            <p className="item-quantity level-medium">{item.quantity} left</p>
            }
        </div>
    </div>
  )
}
