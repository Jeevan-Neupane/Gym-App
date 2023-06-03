import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { excercisOptions, fetchData } from "../Utilis/fetchData";
import ExcerciseCard from "./ExcerciseCard";

function Excercise({ bodyPart, excercises, setExcercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:"1800px",behavior:"smooth"})
  }
  useEffect(()=>{
    const fetchExerciseData=async ()=>{
      let exerciseData=[];
      if(bodyPart==="all"){
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          excercisOptions
        );
      }else{
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          excercisOptions
        );
      }
      setExcercises(exerciseData)
    }
    fetchExerciseData()


  },[bodyPart])
  const indexOfLastExercise=currentPage*exercisePerPage;
  const indexOfFirstExercise=indexOfLastExercise-exercisePerPage;
  const currentExercise=excercises?.slice(indexOfFirstExercise,indexOfLastExercise);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((excercise, index) => {
          return <ExcerciseCard key={index} excercise={excercise} />;
        })}
      </Stack>
      <Stack marginTop="100px" alignItems="center">
        {excercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises.length/9)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Excercise;
