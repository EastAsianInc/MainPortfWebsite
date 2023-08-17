import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography:{
    fontFamily: "courier",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(90deg, #b8aeae, #FFFFFF, #1c1c1c )`,
        },

        img: {
          maxWidth: '100%',
          height: 'auto',

        },

        '.content-container': {
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '64px 16px',
        },

      },
    },
  },
});
