import { CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({}));

export const MainCardContent = ({ image, imageTitle, bottomText }) => {
  return (
    <>
      <CardContent>
        <CardMedia
          sx={{
            objectFit: "contain",
            maxHeight: "10vw",
            justifyContent: "center",
          }}
          component="img"
          image={image}
          alt={imageTitle}
        />
      </CardContent>

      <CardContent
        sx={{
          backgroundColor: "#f7f7f7",
          borderTop: "2px solid ",
          borderColor: "#ff9100",
          alignContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "primary",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            variant: "h3",
          }}
        >
          {bottomText}
        </Typography>
      </CardContent>
    </>
  );
};
