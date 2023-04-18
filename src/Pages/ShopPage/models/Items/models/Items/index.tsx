import { useEffect, useState } from "react"
import Item from "./models/item"
import GetItemsAPI from "../../../../../../Shared/api/GetItemsAPI"
import { Item_T } from "../../../../../../Shared/lib/types"



const Items = () => {
    let [items, setItems]: [Array<Item_T>, any] = useState([
        {
            imgName: 'https://img.05.ru/resize/cn5VeLCw26RCrzMIgOc5zew6aWBr2tx9y6XmQOQLGXY//rs:fit:1043:1290:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay85ZjEvaTVvZzJ4ZWlvZ3hudXZ3ZmpzYWJqaWFldjR5NzF5cmEuanBn',
            name: 'Iphone',
            price: 20000,
            id: 0,
            description: '',
            rating: 0,
            createdAt: '',
            updatedAt: '',
            typeId: 0,
            brandId: 0,
            brand: {
                id: 0,
                name: '',
                imgName: '',
                createdAt: '',
                updatedAt: '',
            },
            type: {
                id: 0,
                name: '',
                createdAt: '',
                updatedAt: '',
            }
        }
    ])
    useEffect(() => {
        let a = async () => {
            let response = await GetItemsAPI()
            console.log(response.data)
            if(response.status === 200) {
                setItems(response.data.items)
            }
        }
        a()
    }, [])
    return <div style={{display: 'flex', flexDirection: 'row'}}>
        {items.map(item => {
            return <Item
                brandName={item.brand.name}
                imgSRC={'http://localhost:3000/' + item.imgName}
                name={item.name}
                price={item.price}
                typeName={item.type.name}
            />
        })}
    </div>
}

export default Items