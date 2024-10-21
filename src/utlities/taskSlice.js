import {createSlice} from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
    },
    reducers: {
        storeTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    }
})

export const {storeTask} = taskSlice.actions

export default taskSlice.reducer
