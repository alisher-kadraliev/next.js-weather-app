import Image from 'next/image';
import React from 'react'

const Show = ({ data }) => {
  console.log(data);
  if (!data || !data.main) return null
  return (
    <div className='flex flex-col z-50 gap-5'>
      <div className='flex justify-between gap-16 items-center'>
        <div className='flex flex-col justify-center items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='logo'
            size='100vw'
            height={100}
            width={100}
          ></Image>
          <p>{data.weather[0].main} </p>
        </div>
        <h2 className='text-4xl font-extrabold'>{data.main.temp} &#176;</h2>
      </div>
      <div className='backdrop-blur-sm bg-white/30 rounded-lg'>
        <div className='flex flex-col gap-10 p-10'>
          <p className='text-xl text-center'>Weather in <strong>{data.name}</strong></p>
          <div className='flex gap-5 max-lg:flex-wrap max-lg:justify-center'>
            <p>Feels like <strong>{data.main.feels_like.toFixed(0)}&#176;</strong></p>
            <p>Humidity <strong>{data.main.humidity}%</strong></p>
            <p>Wind <strong>{data.wind.speed.toFixed(0)}MPH</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show