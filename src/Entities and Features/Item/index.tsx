import { Button } from "antd"
import styles from './lib/styles.module.css'
import { MakeItem_T } from "./lib/types"


const MakeItem: MakeItem_T = (props) => {
    return <div className={styles.item}>
        <img
            src={props.imgSRC}
            width='100%'
            className={styles.image}
        />
        <p style={{ fontWeight: 'lighter' }}>{props.brandName}</p>
        <p>{props.typeName}</p>
        <p>{props.name}</p>
        <span style={{ fontSize: '30px' }}>{props.price} Р</span>
        <Button type='dashed' style={{ width: '100%' }}>Добавить в корзину</Button>
    </div>
}

export default MakeItem