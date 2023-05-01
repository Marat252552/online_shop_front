import { useForm } from 'react-hook-form'
import Form from '../formComponents/form'
import { Button } from 'antd'


const SearchInput = ({ setSearchValue }: {setSearchValue: any}) => {
    let { register, handleSubmit, reset } = useForm({
        mode: 'onSubmit'
    })
    let clearForm = () => {
        reset()
        setSearchValue('')
    }
    let onSubmit = (values: any) => {
        setSearchValue(values.search)
    }
    return <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <input
                    style={{width: '100%'}}
                    {...register('search')}
                    type='text' />
                <button
                    type='submit'>Поиск</button>
            </div>
        </Form>
        <Button
            onClick={clearForm}>Очистить</Button>
    </>
}

export default SearchInput