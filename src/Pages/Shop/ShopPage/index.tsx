import { useContext, useEffect, useState } from "react"
import Header from "../../../Shared/UI/Header"
import LoggedAPI from "../../../Shared/api/LoggedAPI"
import { observer } from 'mobx-react-lite'
import { Context } from "../../../App/App"
import Menu from "../../../Shared/UI/Menu"
import { Button } from "antd"
import ItemsShowcase from "../../../Widgets/ItemsShowcase"
import MainTemplate from "../../../Templates/MainTemplate"
import SearchInput from "../../../Shared/UI/SearchInput"
import GetItemsAPI from "../../../Shared/api/GetItemsAPI"
import { Item_T } from "../../../Shared/lib/types"
import PaginationF from "../../../Shared/UI/Pagination/pagination"
import Tags from "../../../Shared/UI/Tags"
import AddToBasketAPI from "../../../Shared/api/AddToBasket"

const ShopPage = observer(() => {
    let { userState } = useContext(Context)
    let [offset, setOffset] = useState(0)
    let [limit, setLimit] = useState(5)
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
    let [brandTags, setBrandTags]: [Array<number>, any] = useState([])
    let [typeTags, setTypeTags]: [Array<number>, any] = useState([])
    let [total, setTotal] = useState(0)
    let [searchValue, setSearchValue] = useState('')


    let addToBasket = async (id: number) => {
        try {
            let response = await AddToBasketAPI(id)
            if(response.status === 200) {
                fetchItems()
            }
        } catch(e) {
            console.log(e)
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
    }, [offset, limit, total, searchValue, brandTags, typeTags])
    useEffect(() => {
        let a = async () => {
            let response = await LoggedAPI()
            if (response.status === 200) {
                userState.setIsAuth(true)
                userState.setUser(response.data.user)
            }
        }
        a()
    }, [])
    return <div>
        <MainTemplate MenuChildren={<>
            <SearchInput setSearchValue={setSearchValue} />
            {/* <Tags name="Категории" tagsData={} setTags={setTypeTags}/>
            <Tags name="Производители" setTags={setBrandTags}/> */}
        </>
        }>
            <>
                <PaginationF limit={limit} setOffset={setOffset} total={total} />
                <ItemsShowcase addToBasket={addToBasket} items={items} />
            </>
        </MainTemplate>
    </div>
})

export default ShopPage