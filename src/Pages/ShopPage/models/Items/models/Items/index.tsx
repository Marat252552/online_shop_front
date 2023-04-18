import { useState } from "react"
import Item from "./models/item"



const Items = () => {
    let [items, setItems] = useState([
        {
            imgSRC: 'https://img.05.ru/resize/cn5VeLCw26RCrzMIgOc5zew6aWBr2tx9y6XmQOQLGXY//rs:fit:1043:1290:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay85ZjEvaTVvZzJ4ZWlvZ3hudXZ3ZmpzYWJqaWFldjR5NzF5cmEuanBn',
            name: 'Iphone',
            price: 20000,
            type: 'Смарфтон',
            brand: 'Apple'
        },
        {
            imgSRC: 'https://store-apple.msk.ru/image/cache/catalog/tovary/iphone/iphone13/apple-iphone-13-pro-green-800x800.jpg',
            name: 'Iphone 2',
            price: 30000,
            type: 'Смарфтон',
            brand: 'Apple'
        },
        {
            imgSRC: '',
            name: 'Iphone 3',
            price: 30000,
            type: 'Смарфтон',
            brand: 'Apple'
        }
    ])
    return <div style={{display: 'flex', flexDirection: 'row'}}>
        {items.map(item => {
            return <Item
                brand={item.brand}
                imgSRC={item.imgSRC}
                name={item.name}
                price={item.price}
                type={item.type}
            />
        })}
    </div>
}

export default Items