import { category } from "./category.entity"
export interface product{
    category: category
    id:number
    title:string
    price:string
    descripcion:string
    images:string[]
}