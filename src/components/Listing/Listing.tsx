import { nanoid } from 'nanoid'
import { ItemObject } from '../../models'
import { Item } from '../Item/Item'

interface Items {
  items: ItemObject[]
}
  
export const Listing = ({ items }: Items) => {
  return (
    <div className="item-list">
      {items.map(item => <Item item={item} key={nanoid()}/>)}
    </div>
  )
}
