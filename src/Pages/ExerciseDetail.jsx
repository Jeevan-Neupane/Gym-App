import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  excercisOptions,
  fetchData,
  youtubeOptions,
} from "../Utilis/fetchData";
import Detail from "../Components/Detail";

import SimilarExcercise from "../Components/SimilarExcercise";
import ExcerciseVideo from "../Components/ExcerciseVideo";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ExerciseDetail() {
  const [excerciseDetail, setExcerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const { id } = useParams();
  const excerciseDbUrl = "https://exercisedb.p.rapidapi.com";
  const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

  useEffect(() => {
    const fetchDataById = async () => {
      const data = await fetchData(
        `${excerciseDbUrl}/exercises/exercise/${id}`,
        excercisOptions
      );
      setExcerciseDetail({ ...excerciseDetail, ...data });
      
      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${excerciseDetail.name}`,
        youtubeOptions 
        
      );

      setExerciseVideo(exerciseVideoData);
    };
    fetchDataById();
  }, [id]);
  
  console.log(exerciseVideo)
 

  return (
    <Box>
      <Navbar />

      <Detail excerciseDetail={excerciseDetail}/>

      <ExcerciseVideo contents={exerciseVideo.contents} name={excerciseDetail.name}  />
      <SimilarExcercise />
      <Footer />
    </Box>
  );
}

export default ExerciseDetail;
