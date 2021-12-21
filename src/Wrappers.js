import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import {  Paper } from "@mui/material";

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

export function BadgeBox({ title, url, name }) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      paddingY={2}
      paddingX={12}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,
          typography: "subtitle2",
        }}
        title={title}
      >
        <img src={url} alt="badge" height={70} width={70} />
        <Box sx={{ pb: 4 }}>{name}</Box>
      </Box>
    </Box>
  );
}






