import { configureStore,createSlice } from '@reduxjs/toolkit'


let jwtToken = createSlice({
    name:'jwtToken',
    initialState : {jwtToken:null},
    reducers : {
        changeJWT : (state,nextState) =>{
            state.jwtToken = nextState.payload
        },
        deleteJWT : (state) =>{
            state.jwtToken = null
        }
    }
})



export default configureStore({
  reducer: {
      jwtToken: jwtToken.reducer,
  }
}) 

export let { changeJWT,deleteJWT } = jwtToken.actions 