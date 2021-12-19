import * as React from "react";
import Shield from "../../shield40.png"
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Card, CardContent, Divider, List, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getTopProjectInfo } from "../../model/project";
import { ProfileAvatar } from "../Profile/ProfileAvatar";
import { MyHeader, MyTitle } from "../../Wrappers";
import Trumid from "../../trumid.svg";
import { flexbox } from "@mui/system";
import { topProjects } from "../../model/mock";
import  TrumidArrows from "../../trumidarrows.svg"
import AppBar from "./AppBar";

export function Dashboard() {

  return (
    <>
    <AppBar/>
      <Paper square={true} color="blue">


          <Box display="flex" justifyContent="center" alignItems="center" pb={20} >
            <Box  pr={8}>
              <img src={Trumid} alt="trumid" height={75} width={75} />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Box typography="h3" textAlign="center" >
                Trumid Center
              </Box>
              
                <Box  typography="h6" textAlign="center" >Missions and Badges</Box>
              </Box>
            
          </Box>
          
          <Box textAlign="center" pb={3} fontSize="1.5rem" lineHeight={1}>
            Current Missions
            <Divider sx={{ ml: 12, mr: 12, mt: 2 }} />
          </Box>
    <Stack direction="row" spacing={10} justifyContent="center">        
            {topProjects.map((item) => (

<Box display="flex"  justifyContent="center" alignItems="center" px={8} >

 <Box alignSelf="auto" pr={4}>
              <img src={TrumidArrows} alt="trumid" height={50} width={50} />
            </Box>
<Box display="flex" flexDirection="column" >

<Box typography="h5"  >
                {item.name}
              </Box>
                <Box  typography="body2" pl={0.5}>{item.desc}</Box>

              </Box>
              </Box>
            ))}
            </Stack>
          <Box
            sx={{
              px: 15,
            }}
          >
            <Stack spacing={3}>
              
                  <Box
                    sx={{
                      fontWeight: 700,
                      pt: 4,
                      pl: 1,
                      pb: 3,
                      fontSize: "1rem",
                      textTransform: 'capitalize'
                    }}
                  >
                    topppps
                  </Box>
                  <Box
                  sx={{
                      fontWeight: 700,
                      pt: 4,
                      pl: 1,
                      pb: 3,
                      fontSize: "1rem",
                      textTransform: 'capitalize'
                    }}
                  >
                    topppps
                  </Box>
                  </Stack>
                  <Stack direction="row" spacing={4} py={5} px={6}>
                      <Link
                        underline="hover"
                        color="#000"
                        fontSize="1rem"
                       wrap="noWrap"
                      sx={{ textTransform: "capitalize"}}

                      >project name
                      </Link>
                  </Stack>
           
          </Box>
        </Paper>
        </>

  );
}
