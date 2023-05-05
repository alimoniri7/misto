import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        darkGray: {
            main: "#121212"
        },
        gray: {
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
        }
    }
})

export default theme