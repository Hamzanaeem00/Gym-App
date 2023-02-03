import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  console.log("bodyPart==>",bodyPart)
    // console.log("setBodyPart==>",setBodyPart);  
const [search, setSearch]= useState('')
const [bodyParts, setBodyParts]= useState([])
// console.log("check",bodyParts);





const fetchExercisesData  = async () => {

  const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
  setBodyParts(['all' , ...bodyPartsData])
  console.log("bodyPartsData===>",bodyPartsData);
} 

useEffect(()=>{
  fetchExercisesData();
},[])
  const handleSearch = async ()=>{
    // console.log("working");
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions );
      console.log("exercisesData==>",exercisesData );
      const searchedExercises = exercisesData.filter((exercise)=>
      exercise.name.toLowerCase().includes(search) ||
      exercise.target.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch('')
        setExercises(searchedExercises)
        // console.log(searchedExercises);
    }


  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
      Awesome Exercises You <br /> Should Know
    </Typography>
    <Box position="relative" mb="72px">
      <TextField 
      value={search}
       onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        placeholder="Search Exercises"
        type="text"
      />
      <Button onClick={handleSearch} className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
        Search
      </Button>
    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
      <HorizontalScrollBar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
    
  </Stack>
  )
}

export default SearchExercises
