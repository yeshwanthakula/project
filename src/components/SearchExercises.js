import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData,excercisesoptions } from '../utils/fetchData';
import HorizontalScrollbar
from './HorizontalScrollbar';


const SearchExcercises = ({ setExercises, bodyPart, setBodyPart }) => {

  

  const [search, setSearch] = useState('');
 
  const [bodyParts,setBodyParts] = useState('');


// whenever the page rendered i need to set the bodyparts data  useeefect
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excercisesoptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

const handleSearch = async()=>{

  // if search exists then filter the main db and find the one, which matches my seach

  if(search){
    
    const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises',excercisesoptions);
    const searchedExercises = exercises.filter(
      (item) => item.name.toLowerCase().includes(search)
             || item.target.toLowerCase().includes(search)
             || item.equipment.toLowerCase().includes(search)
             || item.bodyPart.toLowerCase().includes(search),
    );
    setSearch('');
    setExercises(searchedExercises);
  }



}

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
          <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            Awesome Exercises You <br /> Should Know
          </Typography>
          <Box position="relative" mb="72px">
           <TextField    
            sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
           height = "76px"
           value={ search}
           placeholder='search Excercises'
           type="text"
           onChange={(e) => setSearch(e.target.value.toLowerCase())}

           
           
           
           />

<Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} 
  onClick={handleSearch}>
          Search
        </Button>
            
          </Box>
          <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar data ={bodyParts} bodyPart ={bodyPart}  setBodyPart ={setBodyPart} bodyParts></HorizontalScrollbar>
          </Box>
        </Stack>
      );
    };


export default SearchExcercises