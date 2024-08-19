import { CategoryName } from "../components/Products/static";

export type Product = {
    id: number,
    name: string,
    description: string,
    image: string,
    currentPrice: number,
    oldPrice: number,
    isSale: boolean,
    isSelection: boolean,
    published: boolean,
    tags: string[],
    categories: CategoryName,
}
export type CartItem = {
  product: Product,
  quantity: number,
};