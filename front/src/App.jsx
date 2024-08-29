import React from 'react'
import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Detect from './pages/Detect'
import Drive from './pages/Drive'
import Game from './pages/Game'


const App = () => {
  return (
    <main className = "bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/detect" element = {<Detect />} />
          <Route path = "/drive" element = {<Drive />} />
          <Route path = "/game" element = {<Game />} />
        </Routes>
      </Router>
    </main>
  )
}
export default App
