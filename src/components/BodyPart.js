import React from "react";
import { Stack } from "@mui/system";
import Icon from "../assets/assets/icons/gym.png";
import { Typography } from "@mui/material";
const BodyPart = ({item, setBodyPart, bodyPart}) => {
//   console.log("item", item);
// console.log(setBodyPart);

  return (
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop:   bodyPart === item ? "4px solid #FF2625" :" ",
                background: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "282px",
                cursor: "pointer",
                gap: "47px",
        } }
        onClick={() =>{
            setBodyPart(item)
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
      >
        <img
          src={Icon}
          alt="dumbbell"
          style={{ width: "40px", height: "40px" }}
        />
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
      </Stack>
  );
};

export default BodyPart;
