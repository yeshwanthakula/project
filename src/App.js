import React from 'react'
import './App.css'
import{Routes,Route} from 'react-router-dom'

import { Box } from '@mui/material'

import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <>

<Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
     <Navbar/>
     <Routes>
       <Route  path ='/' element ={<Home/>}></Route>

        
        <Route path="/exercise/:id" element={<ExerciseDetails />} />

     </Routes>

   
    </Box>
    
    </>
    


  )
}

export default App

