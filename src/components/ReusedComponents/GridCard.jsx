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
  Badge,
  Avatar,
} from "@mui/material";
import TrumidPatch from "../../patchtrumid.svg";
import TrumidAvatar from "../../trumidavatarbadge.svg";

export const MainContent = ({
  image,
  imageTitle,
  bottomText,
  bottomSubText,
}) => {
  return (
    <>
      <CardMedia
        sx={{
          objectFit: "contain",
          width: "100%",
          height: "10vw",
          marginTop: "1vw",
          marginBottom: "1vw",

          justifyContent: "center",
        }}
        component="img"
        height="auto"
        width="auto"
        image={image}
        alt={imageTitle}
      />

      <Box
        typography="body2"
        textAlign="center"
        sx={{
          boxSizing: "border-box",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          color: "#011e4b",
          fontWeight: "bolder",
          backgroundColor: "#f7f7f7",
          width: "100%",
          height: "3vw",
          borderTop: "3px solid ",
          borderColor: "#ff9100",
          pt: 2,
          pl: 1,
          pr: 1,
          margin: "auto",
          display: "block",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        {bottomText}
        {bottomSubText}
      </Box>
    </>
  );
};

const PeopleContent = ({ projectsCount, badgesCount }) => {
  return (
    <>
      {/* <CardHeader
        titleTypographyProps={{
          variant: "h4",
          noWrap: "true",
          color: "#fff",
          ml: 2,
        }}
        title={title}
        subheaderTypographyProps={{
          variant: "subtitle2",
          color: "#ff9100",
          noWrap: "true",
          ml: 2,
          fontWeight: "bold",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        sx={{
          backgroundColor: "#011e4b",
          width: "100%",
          borderBottom: "3px solid ",
          borderColor: "#ff9100",
          pt: 3,
          pb: 2,
          margin: "auto",
          display: "block",
        }}
      /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 5,
          pb: 5,
          alignItems: "center",
        }}
      >
        <Badge
          badgeContent={projectsCount}
          color="secondary"
          overlap="circular"
        >
          <Avatar
            src={TrumidPatch}
            alt="badge"
            sx={{
              width: "auto",
              height: "auto",
              maxWidth: 34,
              pb: 1,
            }}
          />
        </Badge>
        <Box sx={{ pl: 2 }}>
          <Badge
            badgeContent={badgesCount}
            color="secondary"
            overlap="circular"
          >
            <Avatar
              src={TrumidAvatar}
              alt="badge"
              sx={{
                width: "auto",
                height: "auto",
                maxWidth: 34,
                pb: 1,
              }}
            />
          </Badge>
        </Box>
      </Box>
    </>
  );
};

export function GridContainer({ children }) {
  return (
    <Container sx={{ pt: 5 }} maxWidth="lg">
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

export function GridCard(props) {
  const {
    link,
    title,
    subheader,
    isPeople,
  } = props;

  return (
    <Grid item component={Card} xs sx={{ mb: 6, m: 3 }}>
      <Link href={link} underline="none">
        <CardHeader
          titleTypographyProps={{
            fontSize: "1.1em",
            color: "#fff",

            fontWeight: 600,
            textAlign: "center",
          }}
          title={title}
          subheader={subheader}
          subheaderTypographyProps={{
            variant: "subtitle2",
            color: "#ff9100",
            noWrap: "true",
            ml: 2,
            fontWeight: "bold",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
          sx={{
            backgroundColor: "#011e4b",
            width: "100%",
            borderBottom: "3px solid ",
            borderColor: "#ff9100",
            pt: 3,
            pb: 2,
            margin: "auto",
            display: "block",
            alignContent: "center",
          }}
        />
        {!!isPeople ? <PeopleContent {...props} /> : <MainContent {...props} />}
      </Link>
    </Grid>
  );
}
