'use client';
import { createTheme } from "@mui/material";

const theme = createTheme({
    direction: 'rtl',
    palette: {
        text:{
            primary: "#121212",
            secondary: '#ffffff'
        },
        blackGray: {
            main: "#121212"
        },
        darkGray: {
            main: "#363636"
        },
        gray: {
            main: "#9a9a9a"
        },
        lightGray: {
            main: "#E6E6E6"
        },
        whiteGray: {
            main: "#F8F8F8"
        },
        pink: {
            main: "#E91E63"
        },
        yellow: {
            main: "#F0CC84"
        },
        error:{
            main: "#D61313"
        },
        ok: {
           main: "#0BB17F" 
        },
        white: {
            main: '#ffffff'
        }
    }
})

export default theme