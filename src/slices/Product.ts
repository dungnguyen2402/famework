import { addProduct, deleteProduct, getProduct, updateProduct } from "@/action/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
} as { products: any[], isLoading: boolean }

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},

    //re render
    extraReducers: (builder) => {
        //fetching
        builder.addCase(getProduct.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        })
        builder.addCase(getProduct.rejected, (state) => {
            state.isLoading = false;
        })

        // adding - 3 status
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        // updating
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const product = action.payload
            state.products = state.products.map((item: any) => item.id === product.id ? product : item)
        })
        // deleting
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id)
        })
    }
})

export const productReducer = productsSlice.reducer