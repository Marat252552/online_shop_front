import { Button } from "antd"
import styles from './styles.module.css'


const Item = (props: { imgSRC: string, name: string, price: number, type: string, brand: string }) => {
    return <div style={{ width: '200px', border: 'solid 1px black', borderRadius: '10px', margin: '10px', padding: '10px' }}>
        <img
            src={props.imgSRC}
            width='100%'
            className={styles.image}
        />
        <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>{props.brand}</p>
        <p style={{ fontSize: '15px' }}>{props.type}</p>
        <p >{props.name}</p>
        <span style={{ fontSize: '30px' }}>{props.price} Р</span>
        <Button type='dashed' style={{ width: '100%' }}>Добавить в корзину</Button>
    </div>
}

export default Item