import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryList from './countryList'

const MainPage = (props) => {
  return (
    <div>
            <h1>{props.darkMode}</h1>
        <Routes>
            <Route exact path='/' element={<CountryList darkMode={props.darkMode}></CountryList>}></Route>
        </Routes>
    </div>
  )
}

export default MainPage