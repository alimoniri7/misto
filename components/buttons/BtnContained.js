import { Typography, Button } from "@mui/material";
import React from "react";

const BtnContained = ({
  fontSize = "15px",
  fullwidth = false,
  dark = false,
  children,
  width = "125px",
  height = "48px",
}) => {
  return (
    <Button
      fullWidth={fullwidth}
      sx={{
        width: !fullwidth ? width : 'none',
        height: height,
        bgcolor: dark ? "darkGray.main" : "whiteGray.main",
        borderRadius: "0",
        transition: 'all .2s',
        ':hover':{
            bgcolor: !dark ? "gray.main" : "darkGray.main",
            opacity: dark ? 0.8 : 1
        }
      }}
    >
      <Typography fontSize={fontSize} color={dark ? "white" : "darkGray.main"}>
        {children}
      </Typography>
    </Button>
  );
};

export default BtnContained;
