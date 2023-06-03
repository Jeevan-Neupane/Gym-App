import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

function BodyPart({item,setBodyPart,bodyPart}) {
 
 
  
  return <Stack onClick={()=>{
    setBodyPart(item);
    window.scrollTo({top:1800,left:100,behavior:'smooth'})
  }} type="button" alignItems="center" justifyContent="center" className="bodyPart-card" sx={{
    backgroundColor:"#fff",
    borderBottomLeftRadius:"20px",
    width:'270px',
    height:'280px',
    cursor:"pointer",
    gap:'47px',
    borderTop:bodyPart===item?'4px solid #ff2625':'',
    
  }} >
    <img src={Icon} alt="dumbell" style={{height:"40px",width:"40px"}} />
    <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
  </Stack>;
}

export default BodyPart;
