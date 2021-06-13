import { configureStore } from '@reduxjs/toolkit'
import { AccountSlice } from './Account/AccoutSlice'

const store =  configureStore({
  reducer: {
    account: AccountSlice.reducer
  }
});



export default store;