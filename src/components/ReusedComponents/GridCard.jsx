import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Link,
  Tooltip,
} from "@mui/material";

export function GridContainer({ children }) {
  return (
    <Container sx={{ pt: 7 }} maxWidth="lg">
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

export function GridCard({
  link,
  title,
  subheader,
  image,
  imageTitle,
  toolTip,
}) {
  return (
    <Grid item component={Card} xs sx={{ mb: 6, pb: 0, m: 3 }}>
      <Link href={link} underline="none">
        <CardHeader
          titleTypographyProps={{
            variant: "h4",
            // noWrap: "true",
            color: "#fff",
            // mr: 8,
            // ml: 4,
            textAlign: "center",
          }}
          title={title}
          sx={{
            borderBottom: "3px solid ",
            borderColor: "#ff9100",
            backgroundColor: "#011e4b",
            // background: "linear-gradient( #011e4b, #23467e)",
            pt: 3,
            pb: 3,
            margin: "auto",
            display: "block",
          }}
        />

        <Tooltip title={toolTip}>
          <CardMedia
            sx={{
              objectFit: "contain",
              width: "100%",
              height: "9vw",
              marginTop: "14px",
              marginBottom: "14px",

              justifyContent: "center",
            }}
            component="img"
            height="auto"
            width="auto"
            image={image}
            alt={imageTitle}
          />
        </Tooltip>
      </Link>

      <Tooltip title={toolTip} arrow={true} placement="right-start">
        <CardContent
          alignItems="center"
          sx={{
            boxSizing: "border-box",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "#011e4b",
            fontWeight: "bolder",
            backgroundColor: "#f7f7f7",
            width: "100%",
            borderTop: "3px solid ",
            borderColor: "#ff9100",
            pt: 2,
            pb: 0,
            margin: "auto",
            display: "block",
            typography: "subtitle2",
            textAlign: "center",
          }}
        >
          {subheader}
        </CardContent>
      </Tooltip>
    </Grid>
  );
}
