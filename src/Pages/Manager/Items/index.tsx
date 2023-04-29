import React, { useEffect, useState } from 'react';
import Header from '../../../Shared/UI/Header';
import { Item_T, User_T, Type_T, Brand_T } from '../../../Shared/lib/types';
import GetItemsAPI from '../../../Shared/api/GetItemsAPI';
import Menu from '../../../Shared/UI/Menu';
import Table from './UI/Table';
import MakeTable from './UI/Table';
import { Button, Modal, Pagination } from 'antd';
import { DeleteItemAPI } from './api/api';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../../Shared/UI/SearchInput';


const ItemsPage = () => {
    let navigate = useNavigate()
    let [limit, setLimit] = useState(5)
    let [amount, setAmount] = useState(0)
    let [offset, setOffset] = useState(0)
    // ID удаляемого товара
    let [id, setId] = useState(0)
    let [isModalOpen, setIsModalOpen] = useState(false)
    let [loading, setLoading] = useState(false)
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
    let openDeleteItemModal = (newId: number) => {
        setId(newId)
        setIsModalOpen(true)
    }
    let deleteItem = async () => {
        let response = await DeleteItemAPI(id)
        if (response.status === 200) {
            setLoading(true)
            try {
                let response2 = await GetItemsAPI(offset, limit)
                if (response2.status === 200) {
                    setItems(response2.data.items)
                    setAmount(response2.data.itemsAmount)
                }
            } catch(e) {
                console.log(e)
            } finally {
                setLoading(false)
                setIsModalOpen(false)
            }
            
        }
    }
    useEffect(() => {
        let a = async () => {
            let response = await GetItemsAPI(offset, limit)
            if (response.status === 200) {
                setItems(response.data.items)
                setAmount(response.data.itemsAmount)
            }
        }
        a()
    }, [offset, limit])

    return <div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <Modal
                title="Удалить?"
                open={isModalOpen}
                onOk={deleteItem}
                confirmLoading={loading}
                onCancel={() => {setIsModalOpen(false)}}
            >
                <p>Восстановить позицию невозможно</p>
            </Modal>
            <Menu>
                <SearchInput />
                <Button onClick={() => {navigate('/items/create')}}>Создать</Button>
            </Menu>
            <MakeTable openDeleteItemModal={openDeleteItemModal} deleteItem={deleteItem} amount={amount} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset} items={items} />
        </div>
    </div>

}

export default ItemsPage