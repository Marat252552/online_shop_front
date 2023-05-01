import { useEffect, useState } from "react"
import MakeItem from "../../Entities and Features/Item"
import GetItemsAPI from "../../Shared/api/GetItemsAPI"
import { Item_T } from "../../Shared/lib/types" 
import styles from './lib/styles.module.css'

const ItemsShowcase = ({items}: {items: Array<Item_T>}) => {    
    return <div className={styles.itemsShowcase}>
        {items && items.map(item => {
            return <MakeItem
                brandName={item.brand?.name || 'Не указано'}
                imgSRC={'http://localhost:3000/' + item.imgName}
                name={item.name}
                price={item.price}
                typeName={item.type?.name || 'Не указано'}
                key={item.id}
            />
        })}
        {!items[0] && <p>Нет ничего</p>}
    </div>
}

export default ItemsShowcase