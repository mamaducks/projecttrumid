import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import {  Avatar, Badge, Grid, Paper, Stack, Tooltip } from "@mui/material";

import Divider from "@mui/material/Divider";

export function MyPageWrapper({ children }) {
  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>  
      <Container>
        <Paper square={true}>{children}</Paper>
      </Container>
    </Box>
  );
}

export function MyHeader({ label, sub, children }) {
  return (
    <CardContent sx={{ display: "flex", flexDirection: "column" }}>
      <Box alignSelf="center">
        <Box typography="h3" fontWeight={500}>{label}</Box>

        <Box display="flex" alignItems="center">
          <Box typography="body1" >
            {sub}
          </Box>
          
        </Box>
        <Box textAlign="right">
        {children}
        </Box>
      </Box>
    </CardContent>
  );
}

export function MyTitle({ title }) {
  return (
    <Box textAlign="center" pb={1} typography="h5" lineHeight={2}>
      {title}
      <Divider sx={{ ml: 12, mr: 12 }} />
    </Box>
  );
}

export function HeaderLabel({ label, content, avatar }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}>
        <Box
          typography="h3"
          sx={{
            alignSelf: "flex-end",
            paddingRight: 2,
            letterSpacing: 0.5,
            color: "#011e4b",
            fontWeight: 500,
          }}
        >
          {label}
        </Box>

        <Badge badgeContent={content} color="secondary" overlap="circular">
          {avatar}
        </Badge>
      </Box>
      <Divider sx={{ marginX: 16, marginTop: 1 }} />
    </>
  );
}


export function GridContent( {mediaContent, label }) {
  return (
<Stack spacing={2} sx={{ justifyContent: "space-evenly" }}>
                  <CardContent
                    sx={{
                      height: 175,
                      width: 200,
                      mx: 1,
                      my: 1,
                      px: 1,
                      py: 1,
                      paddingBottom: 1,
                    }}
                  >
                    <div>
                      {mediaContent}
                    </div>
                    <CardContent>
                      <Box sx={{ maxWidth: 340 }}>
                        {label}
                      </Box>
                    </CardContent>
                  </CardContent>
                  </Stack>

);
}

export function BadgeBox({label, content, avatar }) {
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
    <Box
      sx={{
        alignSelf: "flex-end",
        pr: 2,
        typography: "h3",
        letterSpacing: 0.5,
        color: "#011e4b",
        fontWeight: 500,
      }}
    >
      {label}
    </Box>

    <Badge
      badgeContent={content}
      color="secondary"
      overlap="circular"
    >
      {avatar}
    </Badge>
  </Box>
  <Divider sx={{ mx: 16, mt: 1 }} />
  </>
  );
}

