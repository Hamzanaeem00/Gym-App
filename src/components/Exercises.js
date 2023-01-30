import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExercisesCard from './ExercisesCard'

const Exercises = ({exercises, bodyPart ,setExercises}) => {
  const [currentPage, setCurrentPage]= useState(1)
  const exercisePerPage = 9;
  const IndexOfLastExercise = currentPage * exercisePerPage
  const IndexOfFirstExercise = IndexOfLastExercise-exercisePerPage
  const currentExercises = exercises.slice(IndexOfFirstExercise, IndexOfLastExercise)

const paginate =(e, value)=>{
setCurrentPage(value)
window.scrollTo({top:1800, behavior: 'smooth'})
}

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '100px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {
        currentExercises.map((exercise, index)=>(
         
       <ExercisesCard key={index} exercise={exercise}  />

        ))
      }
    </Stack>
    <Stack alignItems='center' mt ='100px'>
    {
      exercises.length >9 && (
        <Pagination color='standard' shape='rounded' defaultPage={1}
        count ={Math.ceil(exercises.length/9)}
        page={currentPage} 
        onChange={paginate}/>
        )
      }
      </Stack>
      </Box>
  )
}

export default Exercises