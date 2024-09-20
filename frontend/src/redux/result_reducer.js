import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        userData : {
          username: '',
          email: '',
          department: '',
        },
        result : []
    },
    reducers : {
        setUserData : (state, action) => {
            state.userData = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction : () => {
            return {
              userData : {
                username: '',
                email: '',
                department: '',
              },
                result : []
            }
        }
    }
})

export const { setUserData, pushResultAction, resetResultAction, updateResultAction } = resultReducer.actions;

export default resultReducer.reducer;