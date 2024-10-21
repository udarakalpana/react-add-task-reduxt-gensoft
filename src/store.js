import {configureStore} from "@reduxjs/toolkit";
import taskReducer from './utlities/taskSlice.js'

export default configureStore({
    reducer: {
        task: taskReducer
    },
})