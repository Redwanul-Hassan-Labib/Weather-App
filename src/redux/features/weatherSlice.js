import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState ={
    weatherData : [],
    leading : false,
    Error: null
}


// fetch weather data api

const fetchWeatherData = createAsyncThunk("weater/fetchWeatherData" , async ()=>{
    
} )

const weather = createSlice({
    name: "weather",
    initialState,
    reducers: {}
})