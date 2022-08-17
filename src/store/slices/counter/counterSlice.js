import{createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 10,
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1 
        },
        decrement:(state)=>{
            state.value -= 1 
        },
        incrementBy:(state, action) => { 
            state.value += action.payload 
        },
        
        reset: (state) => {
            state.value = 0;
        },
        
    }
})

export const {increment, decrement, incrementBy, reset} = counterSlice.actions;
export default counterSlice.reducer;