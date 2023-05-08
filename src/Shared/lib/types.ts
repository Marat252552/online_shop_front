

export type User_T = {
    id: number,
    login: string,
    role: string,
    basket: {
        id: number
    }
}

export type Brand_T = {
    id: number,
    name: string,
    imgName: string,
    createdAt: string,
    updatedAt: string
}

export type Type_T = {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string
}

export type Item_T = {
    id: number,
    name: string,
    description: string,
    price: number,
    rating: number,
    imgName: string,
    createdAt: string,
    updatedAt: string,
    brandId: number,
    typeId: number,
    brand: Brand_T,
    type: Type_T
}

export type BasketDevice_T = {
    id: number,
    createdAt: number,
    updatedAt: number,
    basketId: number,
    itemId: number
}

export type Basket_T = {
    id: number,
    createdAt: number,
    updatedAt: number,
    userId: number,
    basket_devices: Array<BasketDevice_T>
}

