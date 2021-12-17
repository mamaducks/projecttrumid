import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { projects } from "../../data";
import { Card, CardContent, Divider, Paper } from "@mui/material";

const titles = [
  "Project Lead",
  "Project Backend",
  "Project Frontend",
  "Project Managers",
  "Project Architects",
  "UI/UX Designers",
  "Web Developers",
  "QA and Testing Specialists",
];

const peeps = [
  { id: "lead", name: "terry" },
  { id: "lead", name: "tammyy" },
  { id: "lead", name: "tommy" },
  { id: "lead", name: "tony" },
  { id: "back", name: "maureen" },
  { id: "back", name: "max" },
  { id: "back", name: "mary" },
  { id: "back", name: "megan" },
];

let i = "";
let both = [...titles, ...peeps];

export function Project() {
  return (
    <Container>
      <Paper square={true}>
        
          <Card>
            {projects.map((project) => (
 <CardContent  key={project.id} sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ alignSelf: "center" }}>
                  <Box sx={{ typography: "h3" }}>{project.name}</Box>
                  <Box display="flex" alignItems="center">
                    <Box
                      sx={{
                        typography: "body1",
                        // textAlign: "flex-end",
                        flexGrow: 1,
                      }}
                    >
                      {project.desc}
                    </Box>
                    <Box my={1} typography="subtitle1" alignSelf="center">
                     
                    </Box>
                  </Box>
                </Box>
                </CardContent>
            ))}
          {/* <Box
            sx={{
              mx: "auto",
              typography: "h4",
              px: 30,
              py: 5,
            }}
            key={project.id}
          >
            {project.name}
            <Box
              sx={{
                typography: "subtitle1",
              }}
            >
              {project.desc}
            </Box>
          </Box> */}
        </Card>

     
        <Box
          sx={{
            px: 15,
          }}
        >
          <Stack spacing={2}>
            {titles.map((title) => (
              <Box
                sx={{
                  typography: "h6",
                  pt: 2,
                }}
              >
                {title}

                <Divider />
              </Box>
            ))}

            <Stack direction="row" spacing={2} pb={2} px={5}>
              {peeps.map((peep) => (
                <Link href="#" underline="hover" color="#000">
                  {peep.name}
                </Link>
              ))}
            </Stack>
          </Stack>
          <Typography variant="h6" gutterBottom component="div">
            Project Architects
          </Typography>

          <Stack direction="row" spacing={2} pl={2}>
            <div>maureen</div>
            <div>max</div>
            <div>mary</div>
          </Stack>
          <Typography variant="h6" gutterBottom component="div">
            ui/ux designers
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            harry henry hunny
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            web developers
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            ryan randolph roger
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            qa and testing specialists
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            nancy nicole
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
