import { createSlice,PayloadAction } from '@reduxjs/toolkit'
// dummy input
import { products } from '@/app/const/produts'

export interface ProductStateType{
    products:{
    id:string,
    name:string,
    qty:number
    price:number
 }[]
}

const initialState:ProductStateType = {
    products:products
}

export const productSlice = createSlice({
    name:'productslice',
    initialState,
    reducers:{
         addProduct:(state:any,action:PayloadAction<[]>)=>{
            state.products=[...state.products,action.payload]
        },
    }
})


export const { addProduct } = productSlice.actions;
export default productSlice.reducer;