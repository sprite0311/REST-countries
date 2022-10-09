import React from 'react'
import { useState } from 'react'

const CountrySearch = (props) => {
  const [searchValue, setSearchValue] = useState()
  return (
    <div className='flex justify-between p-4'>
      <div className={`flex ${props.darkMode? "bg-dElements text-dText": "bg-lElements text-lInput shadow-sm"} p-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type="search" name="" id="" className={`bg-transparent placeholder:text-sm outline-none px-2 ${props.darkMode?"placeholder:text-dText":"placeholder:text-lInput"}:`} placeholder='Search for a country...' onSubmit={console.log("eee")}/>
      </div>
      <select name="" id="" onChange={(e)=>{setSearchValue(e.target.value)}} className={`outline-none px-2 ${props.darkMode?"bg-dElements text-dText":"bg-lElements text-lText shadow-sm"}`}>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}
export default CountrySearch