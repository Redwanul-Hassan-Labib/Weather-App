import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState ={
    weatherData : [],
    loading : false,
    Error: null
}


// fetch weather data api

export const fetchWeatherData = createAsyncThunk("weater/fetchWeatherData" , async (cityName)=>{
   const apiKeyId = "fa38e52225b5086eebebc9a59eb24ffb"
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKeyId}`)
   const data =  await response.json()
   return data;
} )

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        clearWeatherData: (state)=>{
            state.weatherData = []
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchWeatherData.pending,(state)=>{
            state.loading = true,
            state.Error = null
        })
        .addCase(fetchWeatherData.fulfilled,(state, action)=>{
            state.loading = false,
            state.Error = null,
            state.weatherData.push(action.payload)
        })
        .addCase(fetchWeatherData.rejected, (state, action)=>{
            state.loading = false,
            state.Error = action.error.message
        })
    }
})

export const { clearWeatherData } = weatherSlice.actions;

export default  weatherSlice.reducer
