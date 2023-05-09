import useHover from "@/hooks/useHover";
import Check from "@/public/icons/Check";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const CheckBox = ({
  width = "18px",
  height = "18px",
  label,
  fontSize = "15px",
  value=false,
  onChange
}) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <Box height={height} ref={hoverRef} onClick={onChange} sx={{cursor: 'pointer'}} display='flex' alignItems='flex-start' gap={.5} overflow='hidden'  >
      <Box
        width={width}
        height={height}
        border="1px solid"
        borderColor={value || isHovered ? "blackGray.main" : "lightGray.main"}
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{transition: 'all .2s'}}
      >
        {value && <Check />}
      </Box>
      <Typography lineHeight='1.6' fontSize={fontSize}>{label}</Typography>
    </Box>
  );
};

export default CheckBox;
