'use client';
import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/mui/theme";



const MuiThemeProvider = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;