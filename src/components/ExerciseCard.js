import React from 'react'
import {Link} from 'react-router-dom'
import { Typography ,Box ,Stack,Button, Pagination} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
  <Link style={{ textDecoration: 'none' }} to ={`/exercise/${exercise.id}`}>
   <img src ={exercise.gifUrl}  alt ={exercise.name} loading ="lazy"/>

   <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>

<Typography textDecoration = "none" > {exercise.bodyPart}</Typography>

   
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>

    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize" >
      {exercise.name}
    </Typography>

    
  
  </Link>
  )
}

export default ExerciseCard