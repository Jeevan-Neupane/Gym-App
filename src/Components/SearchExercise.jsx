import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, excercisOptions } from "../Utilis/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExercise({setExcercises,bodyPart,setBodyPart}) {
  const [search, setSearch] = useState("");
 
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExcerciseData=async ()=>{
        const bodyPartsData=await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",excercisOptions);
        setBodyParts(["all",...bodyPartsData]);
        
    }
 
    fetchExcerciseData();
  }, []);
  const handleClick = async () => {
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excercisOptions
      );
      
      const searchedExcercise = excerciseData.filter(
        (excercise) =>
          excercise.target.toLowerCase().includes(search) ||
          excercise.equipment.toLowerCase().includes(search) ||
          excercise.bodyPart.toLowerCase().includes(search) ||
          excercise.name.toLowerCase().includes(search)
      );
      setSearch("");
      setExcercises(searchedExcercise);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" sx={{overflowX:"hidden"}}>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        textAlign="center"
      >
        Awesome Excercise You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Excercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "100px",
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              bottom: "0px",
            },
          }}
          onClick={handleClick}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:"relative",width:'100%',p:'20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        

      </Box>
    </Stack>
  );
}

export default SearchExercise;
