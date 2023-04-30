import { Button, Pagination, Table } from "antd";
import { Brand_T, Item_T, Type_T } from "../../../../../Shared/lib/types";
import { useEffect, useState } from "react";
import GetBrandsAPI from "../../../../../Shared/api/GetBrandsAPI";


const MakeTable = () => {
    let [brands, setBrands]: [Array<Brand_T>, any] = useState([] as any)
    let [amount, setAmount] = useState(0)
    let [offset, setOffset] = useState(0)
    let [limit, setLimit] = useState(5)
    useEffect(() => {
        let getBrands = async () => {
            let response = await GetBrandsAPI(offset, limit)
            if (response.status === 200) {
                setBrands(response.data.brands)
                setAmount(response.data.brandsAmount)
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
            title: 'Логотип',
            dataIndex: '',
            key: 'name',
            render: (text: string, brand: Brand_T) => <img
                width='40px'
                src={'http://localhost:3000/' + brand.imgName}
            />,
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
    return <div style={{ border: 'solid 1px black', width: '100%' }}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Pagination defaultCurrent={1} total={amount} defaultPageSize={5} onChange={(page) => { setOffset((page - 1) * limit) }} onShowSizeChange={(e, e2) => console.log(e, e2)} />
        </div>
        <Table columns={columns} dataSource={brands} pagination={false} />

    </div>
}

export default MakeTable