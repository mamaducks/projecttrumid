import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    palette: {
      background: {
        default: "#001e4b", //trumidblue
      },
      primary: {
        main: "#011e4b", //trumidblue
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
        secondary: "red", //white
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
    custom: {
      profile: {
        name: {
          fontWeight: 400,
          letterSpacing: 1,
          fontSize: "2.5rem",
        },

        title: {
          alignContent: "flex-start",
          flexGrow: 1,
          fontSize: "1rem",
          alignItems: "center",
        },

        badges: {
          box: {
            display: "flex",
            alignContent: "flex-end",
            alignItems: "stretch",
            paddingTop: 8,
          },
          label: {
            display: "flex",
            fontSize: "0.875rem",
            alignContent: "flex-end",
            alignSelf: "flex-end",
          },
        },

        header: {
          textAlign: "center",
          color: "primary",
          fontSize: "1.675rem",
          fontWeight: 400,
        },
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
          },
          title: {
            color: "green",
          },
        },
      },

      MuiCardHeader: {
        styleOverrides: {
          root: {
            display: "flex",
            flexDirection: "column",
            paddingBottom: 5,
          },
          content: {
            action: {
              alignSelf: "flex-start",
            },
            // padding: 20
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            margin: "auto",
            width: "90%",
          },

          "&.MuiAppBar-root": {
            maxHeight: 60,
            marginBottom: 30,
            marginTop: 0,
            paddingTop: 0,
            "&:last-child": {
              paddingTop: 0,
            },
          },
        },
      },

      MuiAccordion: {
        styleOverrides: {
          root: {
            alignItems: "center",
            borderColor: "primary",
            border: "solid 1px",
            borderRadius: 10,
            marginBottom: 3,

            "&.Mui-expanded": {
              margin: "auto",
              marginBottom: 3,
            },
            "&:last-child": {
              borderRadius: 10,
            },
          },
        },
      },

      MuiLink: {
        styleOverrides: {
          root: {
            color: "primary",
            "&:hover": {
              color: "#ff9100",
            },
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            variant: "inset",
            margin: "auto",

            backgroundColor: "#ff9100",
          },
        },
      },
    },
  })
);

export default theme;
