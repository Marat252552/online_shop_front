import { useEffect, useState } from "react"
import MakeItem from "../../Entities and Features/Item"
import GetItemsAPI from "../../Shared/api/GetItemsAPI"
import { Item_T } from "../../Shared/lib/types" 
import styles from './lib/styles.module.css'

const ItemsShowcase = () => {
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
    return <div className={styles.itemsShowcase}>
        {items && items.map(item => {
            return <MakeItem
                brandName={item.brand.name}
                imgSRC={'http://localhost:3000/' + item.imgName}
                name={item.name}
                price={item.price}
                typeName={item.type.name}
            />
        })}
        {!items[0] && <p>Нет ничего</p>}
    </div>
}

export default ItemsShowcase