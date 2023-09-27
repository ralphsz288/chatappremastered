import { createSlice } from '@reduxjs/toolkit'

export const templateSlice = createSlice({
    name: 'template',
    initialState:{
        value: "test",
    },
    reducers: {
        templateFunction: (state, action) => {
         console.log(action.payload)
        },
    },
})

export const {templateFunction} = templateSlice.actions
export default templateSlice.reducer