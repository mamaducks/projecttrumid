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
      // color="#00a0ff"  trumidlightblue
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
        fontSize: "3rem",
        fontFamily: "Cairo",
        fontStyle: "bold",
      },
      h2: {
        fontSize: "2.5rem",
        // fontFamily: "Cairo",
        fontStyle: "bold",
        fontWeight: 500,
      },
      h3: {
        fontSize: "2rem",
        fontFamily: "Cairo",

      },
      h4: {
        fontSize: "1.5rem",
        fontFamily: "Cairo",
      },
      h5: {
        fontSize: "1rem",
        fontFamily: "Cairo",
        fontWeight: 300,
        fontStyle: "bold",
      },
      h6: {
        fontSize: "0.875rem",
        fontFamily: "Cairo",
      },
      caption: {
        fontSize: "0.75rem",
      },
    },
    custom: {
      


       
      profile: {
      

        // subHeader: {
        //   alignContent: "flex-start",
        //   flexGrow: 1,
        //   fontSize: "h5",
        //   alignItems: "center",
        //   color: "#ff9100",
        //   letterSpacing: 1,
        //   paddingLeft: 3,
        // },
        grids: {
          justifyContent: "space-around",
          paddingY: 2,
          paddingX: 5,
          boxSizing: "border-box",
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
            // width: "90%",
            // paddingTop: 20,
            paddingBottom: 5,
            marginTop: 5,
            // marginBottom: 30,
            // display: "flex",
          },
          title: {
            color: "green",
          },
        },
      },

    //   MuiCardContent: {
    //     styleOverrides: {
    //     root: {
    //       "&:last-child": {
    //         paddingBottom: 10
    //       },
    //     },

    //   },
    // },

      MuiCardHeader: {
      
        styleOverrides: {
          root: {
            // display: "flex",
            // flexDirection: "column",
            // paddingBottom: 5,
            padding: 0,
            // alignItems: "center"
          },
          // content: {
          //   action: {
          //     alignSelf: "flex-start",
          //   },
          
            // padding: 20
          // },
        },
      },

      MuiCardContent: {
      
        styleOverrides: {
          root: {
            // display: "flex",
            // flexDirection: "column",
            // paddingBottom: 5,
            "&:last-child": {
            padding: 10,
            }
          },
        }
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            margin: "auto",
            // width: "90%",
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
