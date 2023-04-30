import MainContainer from "../../../../../../Shared/UI/formComponents/MainContainer"
import Form from "../../../../../../Shared/UI/formComponents/form"
import Input from "../../../../../../Shared/UI/formComponents/input"
import { useForm } from 'react-hook-form'
import { StyledEngineProvider } from "@mui/material/styles"
import { Inputs_T } from "./lib/types"
import BasicSelect from "../../../../../../Shared/UI/formComponents/select"
import PrimaryButton from "../../../../../../Shared/UI/formComponents/primaryButton"
import { MenuItem } from "@material-ui/core"
import { ErrorMessage } from "@hookform/error-message"
import CreateItemAPI from "../../api/CreateItemAPI"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import GetBrandsAPI from "../../../../../../Shared/api/GetBrandsAPI"
import GetTypesAPI from "../../../../../../Shared/api/GetTypesAPI"
import { Brand_T, Type_T } from "../../../../../../Shared/lib/types"


const NewCreateItemForm = (props: {openNotif: (message: string) => void}) => {
    let navigate = useNavigate()
    let { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    let [brands, setBrands]: [Array<Brand_T>, any] = useState([])
    let [types, setTypes]: [Array<Type_T>, any] = useState([])
    // Подгрузка категорий и производителей
    useEffect(() => {
        let fetchBrands = async () => {
            try {
                let response = await GetBrandsAPI()
                if (response.status === 200) {
                    setBrands(response.data.brands)
                }
            } catch(e: any) {
                console.log(e)
                props.openNotif(e.response.data.message)
            }
        }
        let fetchTypes = async () => {
            try {
                let response = await GetTypesAPI()
                if (response.status === 200) {
                    setTypes(response.data.types)
                }
            } catch(e: any) {
                console.log(e)
                props.openNotif(e.response.data.message)
            }
        }
        fetchBrands()
        fetchTypes()
    }, [])
    let onSubmit = async ({brandId, description, files, name, price, typeId}: Inputs_T) => {
        try {
            let formData = new FormData()
            formData.append('brandId', brandId.toString())
            formData.append('typeId', typeId.toString())
            formData.append('description', description)
            formData.append('img', files[0])
            formData.append('name', name)
            formData.append('price', price)
            let response = await CreateItemAPI(formData)
            if(response.status === 201) {
                navigate(-1)
            }
        } catch(e: any) {
            console.log(e)
            props.openNotif(e.response.data.message)
        }
    }
    return <>
        <StyledEngineProvider injectFirst>
            <MainContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* Название */}
                    <Input
                        error={errors.name}
                        helperText={errors.name?.message}
                        {...register('name', {
                            required: 'Введите название',
                            maxLength: 20,
                        })}
                        type='text'
                        label='Название'
                    />
                    {/* Стоимость */}
                    <Input
                        error={errors.price}
                        helperText={errors.price?.message}
                        {...register('price', {
                            required: 'Введите стоимость',
                            maxLength: 20,
                        })}
                        type='text'
                        label='Стоимость'
                    />
                    {/* Описание */}
                    <Input
                        error={errors.description}
                        helperText={errors.description?.message}
                        {...register('description', {
                            required: 'Укажите описание',
                            maxLength: 20,
                        })}
                        type='text'
                        label='Описание'
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {/* Категория */}
                        <label>Категория
                            <select {...register("typeId", {
                                required: 'Выберите категорию'
                            })}>
                                {types.map(type => {
                                    return <option value={type.id}>{type.name}</option>
                                })}
                            </select>
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="type"
                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                        />

                        {/* Производитель/брэнд */}
                        <label>Производитель
                            <select {...register("brandId", {
                                required: 'Выберите производителя'
                            })}>
                                {brands.map(brand => {
                                    return <option value={brand.id}>{brand.name}</option>
                                })}
                            </select>
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="brand"
                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                        />
                        {/* Изображение */}
                        <label>Изображение
                            <input 
                            {...register("files", {
                                required: 'Загрузите изображение'
                            })}
                            type='file'/>
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="img"
                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                        />
                    </div>

                    <PrimaryButton
                        disabled={!isDirty || !isValid}
                    >Создать</PrimaryButton>
                </Form>
            </MainContainer>
        </StyledEngineProvider>
    </>
}

export default NewCreateItemForm