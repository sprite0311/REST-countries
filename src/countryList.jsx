import React, { useEffect, useRef, useState } from 'react'
import CountryCard from './countryCard'
import {Route, Routes, useNavigate} from "react-router-dom"
import CountryInfo from './countryInfo'


const CountryList = (props) => {
    const [data, setData] = useState([])
    const searchRef = useRef()
    const regionRef = useRef()
    const formRef = useRef(null)
    const navigate = useNavigate()
    useEffect(() => {
        try {
            getAllCountries("all")
        } catch (error) {
            console.log(error);
        }
    }, [])

    const noCountries = data.message || data.status;

    const getAllCountries = async (url) => {
        try {
            const dataToSearch = url
            const res = await fetch(`https://restcountries.com/v3.1/${dataToSearch}`)
            const dataG = await res.json()
            setData(dataG)
        } catch (error) {
            console.log(error)
        }
    }
    const search = () => {
        const searchKey = searchRef.current.value;
        if (searchKey.trim()) {
            const searchCountries = async () => {
                const res = await fetch(`https://restcountries.com/v3.1/name/${searchKey}`)
                const data = await res.json()

                setData(data)
            }
            try {
                searchCountries(data)
            } catch (error) {
                console.log(error)
            }
        } else {
            getAllCountries("all")
        }

    }
    const selectRegion = ()=>{
        const regionKey = regionRef.current.value;

        if (regionKey.trim()) {
            const selectRegion = async ()=>{
                const res = await fetch(`https://restcountries.com/v3.1/region/${regionKey}`)
                const dataG = await res.json()

                setData(dataG)
            }
            if (regionKey === "all"){
                getAllCountries("all")
            }else{
                try {
                    selectRegion(data)
                } catch (error) {
                    console.log(error)
                }
            }
            try {
                selectRegion(data)
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log("I'm Submit")
    }
    const showDetail = (code)=>{
        navigate(`/${code}`)
    }

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<div >
                {/* <CountrySearch darkMode={props.darkMode} search={setSearchValue}></CountrySearch> */}
                <form action="" formRef={formRef} onSubmit={handleSubmit}>
                    <div className='flex justify-between p-4'>
                        <div className={`flex ${props.darkMode ? "bg-dElements text-dText" : "bg-lElements text-lInput shadow-sm"} p-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input type="search" name="" id="" ref={searchRef} onChange={search} className={`bg-transparent placeholder:text-sm outline-none px-2 ${props.darkMode ? "placeholder:text-dText" : "placeholder:text-lInput"}:`} placeholder='Search for a country...' />
                        </div>
                        <select name="" id="" className={`outline-none px-2 ${props.darkMode ? "bg-dElements text-dText" : "bg-lElements text-lText shadow-sm"}`} onChange={selectRegion} ref={regionRef}>
                            <option value="all">All</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>
                </form>
                <div className='grid lg:grid-cols-4'>
                    {!noCountries ? (
                        data.map((country) => (
                            <div>
                                <CountryCard key={country.cca3} darkMode={props.darkMode} code={country.cca3} {...country} showDetail={showDetail}></CountryCard>
                            </div>
                        ))
                    ) : (
                        <p className={`m-auto ${props.darkMode?"text-dText":"text-lText"}`}>No countries found....</p>
                    )}
                </div>
            </div>}>
            </Route>
            <Route exact path='/:countryCode' element={<CountryInfo darkMode={props.darkMode} data = {data} refetch={getAllCountries}></CountryInfo>}></Route>
            </Routes>
        </div>
    )
}


export default CountryList