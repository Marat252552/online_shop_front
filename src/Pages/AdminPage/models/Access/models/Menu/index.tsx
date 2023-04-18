import styles from './lib/styles.module.css'
import { Input } from 'antd'
import SearchInput from './models/SearchInput'
import Tags from './models/Tags'

const Menu = () => {
    return <div className={styles.menu}>
        Поиск
        <SearchInput />
        <Tags />
    </div>
}

export default Menu