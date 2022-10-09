import React from 'react'

const CountryCard = ({code ,flags,  name, population, region, capital, darkMode, showDetail}) => {
  const showDetailHandler = ()=>{
    showDetail(code)
  }
  return (
    <div className={` ${darkMode ? "text-dText bg-dElements": "text-lText bg-lElements shadow-lg"} mx-8 mb-12 cursor-pointer` } onClick={showDetailHandler}>
        <img src={flags.svg} alt="" className='w-full h-[180px]'/>
        <div className='p-4'>
          <h1 className='text-lg'>{name.official}</h1>
          <div className={`grid grid-cols-1 opacity-70 text-sm mt-2`}>
            <span className='flex flex-column font-normal'>Population: {population}</span>
            <span className='flex flex-column font-normal'>Region: {region}</span>
            <span className='flex flex-column font-normal'>Capital: {capital}</span>
          </div>
        </div>
    </div>
  )
}

export default CountryCard