import * as React from "react";
import{
    CssBaseline,
    Box,
    Typography,
    Container,
    Paper,
    Grid,
} from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { theme } from "../../theme"
import { usePageTransition } from "../../components/PageTransition"; //Use as hook

const ProjectsPage = () => {
    
    const transitionClass = usePageTransition();

    return(
            <div className={`${transitionClass} content-container`}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <h2>Sample about page!
                    B
                </h2>
            </ThemeProvider>
            </div>

    );
};

export default ProjectsPage;