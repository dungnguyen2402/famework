import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count: 0
} as { count: number }

const counterSlide = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        increase(state, action) {
            state.count += action.payload
        }
    }
})

// dùng trong component => dispatch
export const { increament, decrement, increase } = counterSlide.actions;
// import vào store
export const counterReducer = counterSlide.reducer