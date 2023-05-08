import { Button } from "antd"
import MainTemplate from "../../../Templates/MainTemplate"
import AddToBasketAPI from "../../../Shared/api/AddToBasket"
import { useEffect, useState } from "react"
import GetBasketAPI from "./api/getBasketAPI"
import { BasketDevice_T, Basket_T, Item_T } from "../../../Shared/lib/types"
import MakeTable from "./components/table"
import GetItemAPI from "../../../Shared/api/GetItemAPI"




const BasketPage = () => {
    let [items, setItems] = useState<Array<Item_T>>([])
    useEffect(() => {
        console.log(items)
    }, [items])
    let [basket, setBasket] = useState<Basket_T>()
    let getBasket = async () => {
        try {
            let response = await GetBasketAPI()
            if(response.status === 200) {
                console.log(response.data.basket.basket_devices)
                let items = await Promise.all(response.data.basket.basket_devices.map(async (el) => {
                    let response = await GetItemAPI(el.itemId)
                    return response.data
                }))
                setItems(items)
            }
        } catch(e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getBasket()
    }, [])
    return <div>
        <MainTemplate MenuChildren={<><Button>Добавить в корзину</Button></>}>
            <MakeTable items={items}/>
        </MainTemplate>
    </div>
}

export default BasketPage