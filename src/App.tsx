import data from './etsy.json'
import './App.css'
import { Listing } from './components/Listing/Listing'
import { ItemObject } from './models'


const newData: ItemObject[] = [] 

for (const i of data) {
  newData.push({
    listing_id: i.listing_id,
    url: i.url,
    MainImage: i.MainImage?.url_570xN,
    title: i.title,
    currency_code: i.currency_code,
    price: i.price,
    quantity: i.quantity
  })
}

function App() {
  return (
    <>
      <Listing items={newData}/>
    </>
    
  )
}

export default App
