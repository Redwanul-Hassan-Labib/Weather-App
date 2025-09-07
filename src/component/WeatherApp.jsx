import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import weatherBanner from "../assets/weather-banner.png";
import WeatherCard from './WeatherCard';
import { clearWeatherData, fetchWeatherData } from '../redux/features/weatherSlice';



const WeatherApp = () => {

  const [city, setCity] = useState("")

  const dispatch = useDispatch()

    const {weatherData, loading, Error } = useSelector(state => state.weather);

    const weatherHandler = (e)=>{
      e.preventDefault()
      if (city.trim() === "") return;
      console.log("data")
      dispatch(fetchWeatherData(city))
      setCity("")
    }
  return (
    <div className='bg-blue-300 w-full h-full'>
        <div className='px-6 py-10 container mx-auto max-w-screen-lg min-h-screen'>
            <h1 className='text-3xl md:text-5xl font-bold text-center'>Weather Dashboard</h1>
            <div className='w-full flex justify-center pt-4'>
              <p className='bg-red-500 text-white inline-block px-2 text-center mb-6 rounded'>fetchs weather data from different cities using redux toolkit and redux thunk</p>
            </div>
            <div className="flex justify-center">
              <img src={weatherBanner} alt="weather Banner" />
            </div>
            <form onSubmit={weatherHandler} className='my-6 flex flex-wrap gap-2 md:gap-4'> 
              <input type="text"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
               placeholder='Enter Your City' className='flex-grow p-2 border rounded outline-none' />
              <button type='submit' className='px-4 py-1.5 bg-blue-500 text-white text-1xl font-semibold rounded hover:bg-blue-800 cursor-pointer'>Enter</button>
              <button type='button' onClick={()=>dispatch(clearWeatherData())} className='px-4 py-1.5 bg-red-500 text-white text-1xl font-semibold rounded hover:bg-red-800 cursor-pointer'>Clear</button>
            </form>

            {/* Loading Effect */}
            {loading && <p className='text-center py-10 text-2xl font-semibold'>Loading....</p>}
            {Error && <p className='text-center py-10 text-2xl font-semibold'>{Error}</p>}

             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
               {
                weatherData.map((data, index)=>(
                <WeatherCard key={index}  city={data.name} 
                        temp={data.main.temp} 
                        description={data.weather[0].description}/>
              ))
               }
             </div>
            
        </div>
    </div>
  )
}

export default WeatherApp