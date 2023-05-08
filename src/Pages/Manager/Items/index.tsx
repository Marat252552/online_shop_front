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
import Tags from '../../../Shared/UI/Tags';
import GetTypesAPI from '../../../Shared/api/GetTypesAPI';
import GetBrandsAPI from '../../../Shared/api/GetBrandsAPI';


const ItemsPage = () => {
    let navigate = useNavigate()
    let [limit, setLimit] = useState(5)
    let [offset, setOffset] = useState(0)
    let [brandId, setBrandId] = useState(0)
    let [typeId, setTypeId] = useState(0)

    // Категории товаров
    let [types, setTypes] = useState<Array<Type_T>>([])
    let [typesTagsData, setTypesTagsData] = useState<Array<{value: number, name: string}>>([])
    let [typeTags, setTypeTags] = useState([])

    // Производители товаров
    let [brands, setBrands] = useState<Array<Brand_T>>([])
    let [brandsOffset, setBrandsOffset] = useState(0)
    let [brandsLimit, setBrandsLimit] = useState(1000)
    let [brandsSearchValue, setBrandsSearchValue] = useState('')
    let [brandsTagsData, setBrandsTagsData] = useState<Array<{value: number, name: string}>>([])
    let [brandTags, setBrandTags] = useState([])
        // Загрузка категорий
    useEffect(() => {
        let fetchTypes = async () => {
            try {
                let response = await GetTypesAPI(0, 1000, '')
                if(response.status === 200) {
                    setTypes(response.data.types)
                }
            } catch(e) {
                console.log(e)
            }
            
        }
        let fetchBrands = async () => {
            try {
                let response = await GetBrandsAPI(brandsOffset, brandsLimit, brandsSearchValue)
                if(response.status === 200) {
                    setBrands(response.data.brands)
                }
            } catch(e) {
                console.log(e)
            }
        }
        fetchTypes()
        fetchBrands()
    }, [])
        // Изменение state для компоненты с выбором тэгов
    useEffect(() => {
        let newTypesTagsData = types.map(el => ({
            value: el.id,
            name: el.name
        }))
        let newBrandsTagsData = brands.map(el => ({
            value: el.id,
            name: el.name
        }))
        setTypesTagsData(newTypesTagsData)
        setBrandsTagsData(newBrandsTagsData)
    }, [types, brands])
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
    let [searchValue, setSearchValue] = useState('')
    let [total, setTotal] = useState(0)
    let openDeleteItemModal = (newId: number) => {
        setId(newId)
        setIsModalOpen(true)
    }
    let deleteItem = async () => {
        let response = await DeleteItemAPI(id)
        if (response.status === 200) {
            setLoading(true)
            try {
                let response2 = await GetItemsAPI(offset, limit, brandTags, typeTags, searchValue)
                if (response2.status === 200) {
                    setItems(response2.data.items)
                    setTotal(response2.data.itemsAmount)
                }
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
                setIsModalOpen(false)
            }

        }
    }
    let fetchItems = async () => {
        try {
            let response = await GetItemsAPI(offset, limit, brandTags, typeTags, searchValue)
            if (response.status === 200) {
                setItems(response.data.items)
                setTotal(response.data.itemsAmount)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchItems()
    }, [offset, limit, total, brandId, typeId, searchValue, typeTags, brandTags])
    return <div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <Modal
                title="Удалить?"
                open={isModalOpen}
                onOk={deleteItem}
                confirmLoading={loading}
                onCancel={() => { setIsModalOpen(false) }}
            >
                <p>Восстановить позицию невозможно</p>
            </Modal>
            <Menu>
                <SearchInput setSearchValue={setSearchValue} />
                <Button onClick={() => { navigate('/items/create') }}>Создать</Button>
                <Tags name='Категории' setTags={setTypeTags} tagsData={typesTagsData}/>
                <Tags name='Производители' setTags={setBrandTags} tagsData={brandsTagsData}/>
            </Menu>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Pagination defaultCurrent={1} defaultPageSize={5} total={total} onChange={(page) => { setOffset((page - 1) * limit) }} onShowSizeChange={(e, e2) => console.log(e, e2)} />
                <MakeTable openDeleteItemModal={openDeleteItemModal} deleteItem={deleteItem} amount={total} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset} items={items} />
            </div>
        </div>
    </div>

}

export default ItemsPage