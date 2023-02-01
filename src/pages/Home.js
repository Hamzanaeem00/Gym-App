import { Box } from '@mui/material'
import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [exercises, setExercises]= useState([])
// console.log(exercises);

const [bodyPart, setBodyPart]= useState ('all')
console.log("bodypart==>", bodyPart);

  return (
   <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
   </Box> 
  )
}

export default Home