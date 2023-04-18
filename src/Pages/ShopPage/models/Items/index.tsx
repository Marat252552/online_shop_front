import styles from './lib/styles.module.css'
import Items from './models/Items'
import PaginationF from './models/Pagination/pagination'

const ItemsBlock = () => {
    return <div className={styles.itemsBlock}>
        <PaginationF />
        <Items />
    </div>
}

export default ItemsBlock