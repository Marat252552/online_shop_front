import { Input } from "antd"


const SearchInput = () => {
    const onSearch = (value: string) => {
        console.log(value)
    }
    return <div>
        <Input.Search placeholder="Поиск по названию" onSearch={onSearch} style={{ width: '100%' }} />
    </div>
}

export default SearchInput