import { useState } from 'react'
import './App.css'
import Signup from './components/views/Signup/Signup'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element = {<Signup/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
