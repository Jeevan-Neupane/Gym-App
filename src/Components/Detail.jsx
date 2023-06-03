import { Stack, Typography, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

function Detail({ excerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = excerciseDetail;

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
 
    return (
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography variant="h2">{name}</Typography>
          <Typography>
            Excercises keep you strong. {name.toUpperCase()} is one of the best
            to target your {target.toUpperCase()}.It will help you to improve
            your mood and gain energy.The equipment use is{" "}
            {equipment.toUpperCase()}
          </Typography>
          {extraDetails.map((item) => {
            return (
              <Stack
                key={item.name}
                direction="row"
                gap="24px"
                alignItems="center"
              >
                <Button sx={{ background: "fff2db",borderRadius:'50%',width:'100px',height:'100px' }}>
                  <img src={item.icon} alt={item.name} height="50px" width="50px"/>
                </Button>
                <Typography textTransform="capitalize" variant="h5" >{item.name}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    );
  
 
}

export default Detail;
