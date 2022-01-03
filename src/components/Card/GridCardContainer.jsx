import { Box, Container } from "@mui/material";

export function GridCardContainer({ children }) {
  return (
    <Container maxWidth="lg">
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
