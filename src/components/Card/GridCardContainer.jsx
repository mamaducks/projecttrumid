import { Box, Container } from "@mui/material";

export function GridCardContainer({ children }) {
  return (
    <Container maxWidth="lg" sx={{pb: 6}}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoFlow: "row",
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
