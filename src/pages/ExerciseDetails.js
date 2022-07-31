import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { excercisesoptions ,fetchData } from '../utils/fetchData';

import Details from '../components/Details';
import ExerciseVideos from '../components/ExercisesVideos'
import SimilarExercises from '../components/SimilarExercises';
import { youtubeoptions } from '../utils/fetchData';

// This pages displays the related details of the exercise that has been clicked .. thepage
// is divided into three pages which are in componenets folder

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();



  useEffect(() => {
  

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
     

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excercisesoptions);
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeoptions);
      setExerciseVideos(exerciseVideosData.contents);
     
      setExerciseDetail(exerciseDetailData);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, excercisesoptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, excercisesoptions);
      setEquipmentExercises(equimentExercisesData);

  
    };

    fetchExercisesData();
  }, [id]);
  return (
    <div>
     <Details  exerciseDetail ={exerciseDetail}/>
     <ExerciseVideos exerciseVideos ={exerciseVideos} name ={exerciseDetail.name}/>
     <SimilarExercises   targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
   

    </div>
  )
}

export default ExerciseDetails