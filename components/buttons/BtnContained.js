import { Typography, Button } from "@mui/material";
import React from "react";

const BtnContained = ({
  fontSize = "15px",
  fullwidth = false,
  dark = false,
  children,
  width = "125px",
  height = "48px",
  onClick
}) => {
  return (
    <Button
      fullWidth={fullwidth}
      sx={{
        width: !fullwidth ? width : 'none',
        height: height,
        bgcolor: dark ? "blackGray.main" : "whiteGray.main",
        borderRadius: "0",
        transition: 'all .2s',
        ':hover':{
            bgcolor: dark ? "darkGray.main" : "lightGray.main",
        }
      }}
      onClick={onClick}
    >
      <Typography fontSize={fontSize} color={dark ? "white" : "blackGray.main"}>
        {children}
      </Typography>
    </Button>
  );
};

export default BtnContained;
