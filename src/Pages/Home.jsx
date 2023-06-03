import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Box } from "@mui/material";
import Excercise from "../Components/Excercise";
import HeroBanner from "../Components/HeroBanner";
import SearchExercise from "../Components/SearchExercise";
import Footer from "../Components/Footer";


function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [excercises, setExcercises] = useState([]);
  
 
  return (
    <Box>
      <Navbar />
      <HeroBanner />
      <SearchExercise
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercise
        setExcercises={setExcercises}
        bodyPart={bodyPart}
       excercises={excercises}
      />
      <Footer />
    </Box>
  );
}

export default Home;
