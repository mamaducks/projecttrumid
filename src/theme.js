import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    palette: {
      background: {
        default: "#001e4b", //trumidblue
      },
      primary: {
        main: "#001e4b", //white
      },
      secondary: {
        main: "#ff9100", //trumidorange
      },
      error: {
        main: "#D72A2A", //red
      },
      warning: {
        main: "#FC7B09", //orange
      },
      info: {
        main: "#6B7D6A", //gray
      },
      success: {
        main: "#09FE00", //green
      },
      text: {
        primary: "#000000", //black
        secondary: "#FFFFFF", //white
      },
    },

    typography: {
      fontFamily: ["Cairo", "Raleway", "Open Sans"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Cairo",
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Cairo",
        fontStyle: "bold",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Cairo",
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            justifyContent: "center",
            margin: "auto",
            borderRadius: 10,
            width: "90%",
            paddingTop: 20,
            paddingBottom: 20,
            marginTop: 20,
            marginBottom: 30,
            display: "flex",
            boxShadow: 3,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            margin: "auto",
            borderRadius: 10,
            width: "90%",
            paddingTop: 18,
            paddingBottom: 25,
            boxShadow: 2,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            paddingTop: 1,
            paddingBottom: 1,
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            margin: "auto",
            paddingTop: 1,
            paddingBottom: 1,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            variant: "inset",
            light: "true",
          },
        },
      },
    },
    
  })
);

export default theme;
