import { Button } from "antd"
import Header from "../../../Shared/UI/Header"
import Menu from "../../../Shared/UI/Menu"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import MainTemplate from "../../../Templates/MainTemplate"
import { Brand_T } from "../../../Shared/lib/types"
import GetBrandsAPI from "../../../Shared/api/GetBrandsAPI"
import MakeTable from "./Components/table"
import DeleteBrandAPI from "./api/deleteTypeAPI"
import GetTypesAPI from "../../../Shared/api/GetTypesAPI"
import DeleteTypeAPI from "./api/deleteTypeAPI"


const TypesPage = (props: { openNotif: (message: string) => void }) => {
    let [types, setTypes]: [Array<Brand_T>, any] = useState([] as any)
    let [amount, setAmount] = useState(0)
    let [offset, setOffset] = useState(0)
    let [limit, setLimit] = useState(1000)
    let [searchValue, setSearchValue] = useState('')
    let fetchTypes = async () => {
        try {
            let response = await GetTypesAPI(offset, limit, '')
            if (response.status === 200) {
                setTypes(response.data.types)
                setAmount(response.data.typesAmount)
            }
        } catch (e: any) {
            console.log(e)
            props.openNotif(e.response.data.message || 'Произошла непредвиденная ошибка')
        }
    }
    let deleteType = async (id: number) => {
        try {
            let response = await DeleteTypeAPI(id)
            if (response.status === 200) {
                await fetchTypes()
            }
            props.openNotif(response.data.message)
        } catch (e: any) {
            console.log(e)
            props.openNotif(e.response.data.message || 'Произошла непредвиденная ошибка')
        }
    }
    useEffect(() => {
        fetchTypes()
    }, [offset, limit, searchValue])
    let navigate = useNavigate()
    return <div>
        <MainTemplate
            MenuChildren={<Button type='dashed' onClick={() => { navigate('/types/create') }}>Создать</Button>}
        >
            <MakeTable amount={amount} types={types} deleteType={deleteType} limit={limit} setOffset={setOffset} openNotif={props.openNotif} />
        </MainTemplate>
    </div>
}

export default TypesPage