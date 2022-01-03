import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    spacing: 3,
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
      fontFamily: ["Quicksand", "Raleway", "Open Sans"].join(","),
        h1: {
          fontSize: "2.5rem",
          fontFamily: "Quicksand",
          fontStyle: "bold",
        },
        h2: {
          fontSize: "2rem",
          // fontFamily: "Cairo",
          // fontStyle: "bold",
          // fontWeight: 500,
        },
        h3: {
          fontSize: "1.8rem",
          fontFamily: "Quicksand",
        },
        h4: {
          fontSize: "1.4rem",
          fontFamily: "Quicksand",
        },
        h5: {
          fontSize: "1rem",
        }
      //   h4: {
      //     fontSize: "1.5rem",
      //     fontFamily: "Quicksand",
      //   },
      //   h5: {
      //     fontSize: "1rem",
      //     fontFamily: "Quicksand",
      //     fontWeight: 300,
      //     fontStyle: "bold",
      //   },
      //   h6: {
      //     fontSize: "0.875rem",
      //     fontFamily: "Quicksand",
      //   },
      //   caption: {
      //     fontSize: "0.75rem",
      //   },
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
      sectionHeader: {
        
        display: "flex",
        alignItems: "center",
        paddingLeft: 14,
        // paddingTop: 18,
        paddingBottom: 3,
      
        sectionText: {
          // paddingLeft: 6,
          // paddingBottom: 1,
          // paddingRight: 3,
          // fontSize: "x-large"
        }},
        // "&:Box": {
        //   color: "#011e4b",
        // },
        // "&:MuiAvatar": {
        //   height: "7vw",
        //   minHeight: "33px",
        // },
        // "&:MuiDivider": {
        //   variant: "middle",
        // },
      // },
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
            // paddingBottom: 5,
            // marginTop: 5,
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

      MuiMenuIcon: {
        styleOverrides: {
          root: {
            size: "large",
            edge: "start",
            color: "#fff",
          },
        },
      },

      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: "30",
            edge: "start",
            color: "#fff",
          },
        },
      },

      MuiCardHeader: {
        styleOverrides: {
          root: {
            color: "#fff",
            // overflow: "hidden",
            // whiteSpace: "nowrap",
            // textOverflow: "ellipsis",
            noWrap: "true",
            backgroundColor: "#011e4b",
            // width: "100%",
            borderBottom: "3px solid ",
            borderColor: "#ff9100",
            display: "block",
            // flexDirection: "column",
            // paddingBottom: 5,
            //  padding: 1,
            // fontWeight: 700,
            // alignItems: "center"
          },
          title: {
            color: "#fff",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            noWrap: "true",
            fontSize: "larger"
          },
          subheader: {
            color: "#ff9100",
            noWrap: "true",
            // ml: 2,
            fontWeight: "bold",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            fontSize: "smaller"
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
            padding: 10,
            // display: "flex",
            // color: "primary",
            // justifyContent: "center",
            // alignContent: "center",
            // paddingTop: 10,
            // display: "flex",
            // flexDirection: "column",
            // paddingBottom: 5,
            "&:last-child": {
              padding: 14,
            },
          },
        },
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

      MuiBadge: {
        defaultProps: {
          overlap: "circular",

          color: "secondary",
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
          // underline: "none",
          root: {
            
            textDecoration: "none",
            // color: "primary",
            // "&:hover": {
            //   color: "#ff9100",
            // },
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            margin: "auto",

            backgroundColor: "#ff9100",
          },
        },
      },
    },
  })
);

export default theme;
