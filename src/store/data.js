import { createSlice } from '@reduxjs/toolkit'
const data = createSlice({
    name: 'data',
    initialState: ["asd"],
    reducers: {
        addData: (state, action) => {
            console.log(state.payload);
            state.push(action.payload)
        }
    }
})
export const { addData } = data.actions;
export default data;