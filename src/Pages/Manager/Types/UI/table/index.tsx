import { Button, Pagination, Table } from "antd";
import { Brand_T, Item_T, Type_T } from "../../../../../Shared/lib/types";
import { useEffect, useState } from "react";
import GetTypesAPI from "../../../../../Shared/api/GetTypesAPI";


const MakeTable = () => {
    let [types, setTypes]: [Array<Type_T>, any] = useState([] as any)
    let [amount, setAmount] = useState(0)
    let [offset, setOffset] = useState(0)
    let [limit, setLimit] = useState(5)
    useEffect(() => {
        let getBrands = async () => {
            let response = await GetTypesAPI(offset, limit)
            if (response.status === 200) {
                setTypes(response.data.types)
                setAmount(response.data.typesAmount)
                console.log(response.data)
                console.log(Math.ceil(amount/limit)) 
            }
        }
        getBrands()
    }, [offset, limit])
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Действие',
            dataIndex: 'action',
            key: 'action',
            render: (_: any) =>
                <div>
                    <Button style={{ width: '200px' }} type='primary' danger>Удалить</Button>
                    <Button style={{ width: '200px' }} >Изменить</Button>
                </div>
        },
    ];
    return <div style={{ border: 'solid 1px black', width: '100%'}}>
        <Table columns={columns} dataSource={types} pagination={false} />
        <Pagination defaultCurrent={1} total={amount} defaultPageSize={5} onChange={(page) => { setOffset((page - 1) * limit) }} onShowSizeChange={(e, e2) => console.log(e, e2)} />
    </div>
}

export default MakeTable