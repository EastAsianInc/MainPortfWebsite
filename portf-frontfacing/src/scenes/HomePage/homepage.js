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
import { theme } from "../../theme";
import { usePageTransition } from "../../components/PageTransition"; //Use as hook

const HomePage = () => {

    const transitionClass = usePageTransition();

    return(

            <div className={`${transitionClass} content-container`}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <h1>Sample Home Page!</h1>
                <Typography> 
Beethoven left Bonn for Vienna in November 1792 amid rumours of war spilling out of France. Shortly after departing, Beethoven learned that his father had died.[32][33] Over the next few years, he responded to the widespread feeling that he was a successor to the recently deceased Mozart by studying Mozart's work and writing works with a distinctly Mozartian flavour.[34]

Beethoven did not immediately set out to establish himself as a composer, but rather devoted himself to study and performance. Working under Haydn's direction,[35] he sought to master counterpoint. He also studied violin under Ignaz Schuppanzigh.[36] Early in this period, he also began receiving occasional instruction from Antonio Salieri, primarily in Italian vocal composition style; this relationship persisted until at least 1802, and possibly as late as 1809.[37]

With Haydn's departure for </Typography>
                <img src="https://i1.sndcdn.com/artworks-gOoMJ0V6MWnNy914-TQyT7Q-t500x500.jpg" alt="Raiden"></img>
            </ThemeProvider>
            </div>

    );
};

export default HomePage;