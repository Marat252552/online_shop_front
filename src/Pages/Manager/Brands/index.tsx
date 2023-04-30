import { Button } from "antd"
import Header from "../../../Shared/UI/Header"
import Menu from "../../../Shared/UI/Menu"

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import MainTemplate from "../../../Templates/MainTemplate"
import { Brand_T } from "../../../Shared/lib/types"
import GetBrandsAPI from "../../../Shared/api/GetBrandsAPI"
import MakeTable from "./Components/table"


const BrandsPage = (props: {openNotif: (message: string) => void}) => {
    let [amount, setAmount] = useState(0)
    let [brands, setBrands]: [Array<Brand_T>, any] = useState([])
    useEffect(() => {
        let fetchBrands = async () => {
            try {
                let response = await GetBrandsAPI()
                setBrands(response.data.brands)
                setAmount(response.data.brandsAmount)
            } catch(e: any) {
                console.log(e)
                props.openNotif(e.response.data.message || 'Произошла непредвиденная ошибка')
            }
        }
        fetchBrands()
    }, [])
    let navigate = useNavigate()
    return <div>
        <MainTemplate 
            BodyChildren={<MakeTable />}
            MenuChildren={<Button type='dashed' onClick={() => { navigate('/brands/create') }}>Создать</Button>}
        ></MainTemplate>
    </div>
}

export default BrandsPage