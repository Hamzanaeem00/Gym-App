import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const ExcersizeDetail = () => {
  const [exerciseDetail, setExerciseDetail]= useState({})
  const {id}= useParams();

   useEffect(()=>{
    // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
    const fetchExercisesData = async ()=>{
     const exerciseDburl = 'https://exercisedb.p.rapidapi.com';

     const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
     const exerciseDetailData = await fetchData(`${exerciseDburl}/exercises/${id}`, exerciseOptions);

     setExerciseDetail(exerciseDetailData)

    }
    fetchExercisesData()

   },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExcersizeDetail