import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ExerciseDetail from "./Pages/ExerciseDetail";
import "./App.css"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>}/>
       
        <Route path="exercise/:id" element={<ExerciseDetail />} />
      </Route>
    )
  );
  return (
    <div>
      <Box width={400} sx={{ width: { xl: "1488px" } }} m="auto">
        <RouterProvider router={router}>
        
        </RouterProvider>
      </Box>
    </div>
  );
}

export default App;
