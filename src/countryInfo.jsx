import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CountryInfo = ({darkMode, data, refetch}) => {
  const navigate = useNavigate()
  const params = useParams()

  let name, flagImg, nativeName, population, region, subregion, capital, topLevelDomain, borders = [];
  
 data.forEach((country) => {
  if(country.cca3 === params.countryCode){
    name = country.name.official
    flagImg = country.flags.svg
    nativeName = country.nativeName
    population = country.population
    region = country.region
    subregion = country.subregion
    capital = country.capital
    topLevelDomain = country.tld

    country.borders?.forEach((border)=>{
      borders.push(border)
    })
  }

})

  const styling = {
    mainText: `${darkMode ? "text-dText" : "text-lText"} mr-2`,
    subText: "text-lInput"
  }
  const handleBack = ()=>{
    navigate("/")
  }
  return (
    <div className='p-8 lg:mt-6'>
      <button className={`flex text-sm ${darkMode ? "text-dText bg-dElements" : "text-lText bg-lElements"} p-2 justify-center items-center`} onClick={handleBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode ? "#ffffff" : "hsl(200, 15%, 8%)"}`} className="w-4 h-4 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back
      </button>
      <div className='grid lg:grid-cols-2 lg:p-8 mt-6'>
        <div className='flex items-center p-6'>
          <img src={flagImg} alt="" className="w-full h-[220px] lg:h-[300px]"/>
        </div>
        <div>
          <h1 className={`text-2xl font-semibold ${darkMode ? "text-dText" : "text-lText"} mt-6`}>{name}</h1>
          <div>
            <ul className='mt-4'>
              <li className='text-sm flex'>
                <h1 className={styling.mainText}>Native Name:</h1>
                <p className={styling.subText}>{nativeName}</p>
              </li>
              <li className='text-sm flex'>
                <h1 className={styling.mainText}>Population:</h1>
                <p className={styling.subText}>{population}</p>
              </li>
              <li className='text-sm flex'>
                <h1 className={styling.mainText}>Region:</h1>
                <p className={styling.subText}>{region}</p>
              </li>
              <li className='text-sm flex'>
                <h1 className={styling.mainText}>Sub Region:</h1>
                <p className={styling.subText}>{subregion}</p>
              </li>
              <li className='text-sm flex'>
                <h1 className={styling.mainText}>Capital:</h1>
                <p className={styling.subText}>{capital}</p>
              </li>
            </ul>
            <ul className='my-4'>
              <li className='text-sm flex'>
                <h1 className={styling.mainText}>Top Level Domain:</h1>
                <p className={styling.subText}>{topLevelDomain}</p>
              </li>
            </ul>
          </div>
          <ul className="text-sm w-full grid grid-cols-4 lg:grid-cols-5">
            {borders.map((border)=>(
                <li key={border} className={`mr-2 px-4 py-1 ${darkMode ? "bg-dElements" : "bg-lElements"} text-lInput cursor-pointer mb-2`} onClick={()=>{
                  refetch("all");
                  navigate(`/${border}`)
                }}>{border}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CountryInfo