import { Button, Table } from "antd";
import { Brand_T, Item_T, Type_T } from "../../../../../../Shared/lib/types";



const MakeTable = (props: {items: Array<Item_T>}) => {
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Категория',
            dataIndex: 'type',
            key: 'type',
            render: (type: Type_T) => <a>{type.name}</a>,
        },
        {
            title: 'Производитель',
            dataIndex: 'brand',
            key: 'brand',
            render: (brand: Brand_T) => <a>{brand.name}</a>,
        },
        {
            title: 'Рейтинг',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating: number) => <a>{rating}</a>,
        },
        {
            title: 'Действие',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, data: Item_T) =>
                <div>
                    <Button style={{ width: '200px' }} type='primary' danger>Удалить товар</Button>
                    <Button style={{ width: '200px' }} >Изменить товар</Button>
                </div>
        },
    ];
    return <div style={{ border: 'solid 1px black', width: '100%' }}>
        <Table columns={columns} dataSource={props.items} />
    </div>
}

export default MakeTable