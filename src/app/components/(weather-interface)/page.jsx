"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import Show from './show/page';

const WeatherInterface = () => {
    const [loading, setLoading] = useState(false)
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

    const fetchWeather = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch(weatherApi)
            const data = await res.json()
            setWeather(data)
        } catch (error) {
            console.log(error);
            alert('Failed to fetch weather data. Please check the city name and try again.');
        } finally {
            setCity('')
            setLoading(false)
        }
    }

    return (
        <>
        <div className='bg-white  px-5 py-3 rounded-lg  z-50 hover:shadow-cyan-300 shadow-md transition-all ease-in-out duration-300'>
            <form action="" onSubmit={fetchWeather}>
                <div className='flex gap-4'>
                    <input autoComplete='on' autoFocus type="text" value={city} placeholder='Şehir Ara...' onChange={e => setCity(e.target.value)} className='focus:outline-none' />
                    <button type='submit' onClick={fetchWeather}><IoSearch />
                    </button>
                </div>
            </form>
            </div>
            {loading ? (
                <p>loading</p>
            ): (
                  weather &&  <Show data = { weather } />
            )}
          
        </>
        
    )
}

export default WeatherInterface