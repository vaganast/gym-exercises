import React, { useState, useEffect } from 'react'
import { Typography, Stack, Box } from '@mui/material'
import Pagination from '@mui/material/Pagination';

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader';


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [exercisesPerPage] = useState(6)

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if(bodyPart === 'all') {
        exercisesData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])

 
  const indexOfLastExercise = currentPage * exercisesPerPage

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  if (!currentExercises.length) return <Loader />;


  return (
    <Box id='exercises'
    mt='50px'
    p='20px'
    sx={{mt: {lg: '110px '}}}
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'
      sx={{ gap: { lg: '110px', xs: '50px'}}}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}        
      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > 9 && (
            <Pagination 
              size='large'
              color="standard"
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
            />
          )}
      </Stack>

    </Box>
  )
}

export default Exercises