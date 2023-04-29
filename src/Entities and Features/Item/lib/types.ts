export type MakeItem_T = (props: {
    imgSRC: string;
    name: string;
    price: number;
    typeName: string;
    brandName: string;
}) => JSX.Element