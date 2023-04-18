import React, { useEffect, useState } from 'react';
import Header from '../../../../Shared/models/Header';
import { Item_T, User_T } from '../../../../Shared/lib/types';
import GetItemsAPI from '../../../../Shared/api/GetItemsAPI';
import { Type_T } from '../../../../Shared/lib/types';
import { Brand_T } from '../../../../Shared/lib/types';
import Menu from './models/Menu';
import Table from './models/Table';
import MakeTable from './models/Table';


const ItemsPage = () => {
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

    return <div>
        <Header />
        <div style={{display: 'flex', flexDirection: 'row', height: '100vh'}}>
            <Menu />
            <MakeTable items={items}/>
        </div>
    </div>

}

export default ItemsPage