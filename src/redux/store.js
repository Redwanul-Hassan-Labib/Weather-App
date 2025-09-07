import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from "../redux/features/weatherSlice.js"
// import { thunk } from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger()

const store = configureStore({
  reducer: {
    weather : weatherReducer
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat( logger)

})

export default store