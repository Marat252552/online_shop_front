export type MakeItem_T = (props: {
    id: number,
    imgSRC: string;
    name: string;
    price: number;
    typeName: string;
    brandName: string;
    addToBasket: (id: number) => Promise<void>
}) => JSX.Element