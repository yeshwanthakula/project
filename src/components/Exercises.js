import React from 'react'
import { useEffect ,useState } from 'react'
import Pagination  from '@mui/material/Pagination'
import {Box, Stack,Typography} from '@mui/material'
import { fetchData } from '../utils/fetchData'

import { excercisesoptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

// int this page we are setting exercises from bodypart and then exporting the data to exercise card

const Exercises = ({setExercises ,exercises ,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excercisesoptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excercisesoptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);



  const paginate =(e ,value)=>{

setCurrentPage(value);
window.scrollTo({ top: 1800, behavior: 'smooth' });

  }

  const lastindx = (exercisesPerPage)*(currentPage);
  const firstindx = lastindx - exercisesPerPage;
  const currentExercises = exercises.slice(firstindx,lastindx);

// parsing exercises accordingly into each page

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt ="100"px alignItems="center"> 
       {exercises.length >9 && (
        <Pagination
        color="standard"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercises.length / exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        // the on change property defaultly passes the event and the index of the page
        size="large"
      />
       )}


    </Stack>


  </Box>
  )
}

export default Exercises