import { Button, Pagination, Table } from "antd";
import { Brand_T, Item_T, Type_T } from "../../../../../Shared/lib/types";
import { useEffect, useState } from "react";
import GetBrandsAPI from "../../../../../Shared/api/GetBrandsAPI";
import DeleteBrandAPI from "../../api/deleteTypeAPI";


const MakeTable = (props: {deleteType: any, openNotif: (message: string) => void, setOffset: any, amount: number, limit: number, types: Array<Type_T>}) => {
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
            render: (_: any, data: Brand_T) => {
                return <div>
                <Button onClick={() => {props.deleteType(data.id)}} style={{ width: '200px' }} type='primary' danger>Удалить</Button>
                <Button style={{ width: '200px' }} >Изменить</Button>
            </div>
            }
                
        },
    ];
    return <div style={{ border: 'solid 1px black', width: '100%' }}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Pagination defaultCurrent={1} total={props.amount} defaultPageSize={5} onChange={(page) => { props.setOffset((page - 1) * props.limit) }} onShowSizeChange={(e, e2) => console.log(e, e2)} />
        </div>
        <Table columns={columns} dataSource={props.types} pagination={false} />
    </div>
}

export default MakeTable