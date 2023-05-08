import { Button } from "antd"
import Header from "../../../Shared/UI/Header"
import Menu from "../../../Shared/UI/Menu"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import MainTemplate from "../../../Templates/MainTemplate"
import { Brand_T } from "../../../Shared/lib/types"
import GetBrandsAPI from "../../../Shared/api/GetBrandsAPI"
import MakeTable from "./Components/table"
import DeleteBrandAPI from "./api/deleteBrandAPI"


const BrandsPage = (props: {openNotif: (message: string) => void}) => {
    let [brands, setBrands]: [Array<Brand_T>, any] = useState([] as any)
    let [amount, setAmount] = useState(0)
    let [offset, setOffset] = useState(0)
    let [limit, setLimit] = useState(1000)
    let fetchBrands = async () => {
        let response = await GetBrandsAPI(offset, limit, '')
        if (response.status === 200) {
            setBrands(response.data.brands)
            setAmount(response.data.brandsAmount)
        }
    }
    let deleteBrand = async (id: number) => {
        try {
            let response = await DeleteBrandAPI(id)
            if(response.status === 200) {
                await fetchBrands()
            }
            props.openNotif(response.data.message)
        } catch(e: any) {
            console.log(e)
            props.openNotif(e.response.data.message || 'Произошла непредвиденная ошибка')
        }
    }
    useEffect(() => {
        fetchBrands()
    }, [offset, limit])
    useEffect(() => {
        let fetchBrands = async () => {
            try {
                let response = await GetBrandsAPI(0, 1000, '')
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
            BodyChildren={<MakeTable amount={amount} brands={brands} deleteBrand={deleteBrand} limit={limit} setOffset={setOffset} openNotif={props.openNotif}/>}
            MenuChildren={<Button type='dashed' onClick={() => { navigate('/brands/create') }}>Создать</Button>}
        ></MainTemplate>
    </div>
}

export default BrandsPage