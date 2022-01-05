import { Card, CardHeader, Grid, Link } from "@mui/material";
import { ProfileCardContent } from "./ProfileCardContent";
import { MainCardContent } from "./MainCardContent";

export function GridCard(props) {
  const { link, title, subheader, isPeople } = props;

  return (
    <Grid item component={Card} xs sx={{ m: 3 }}>
      <Link href={link}>
        <CardHeader
          title={title}
          subheader={subheader}
          titleTypographyProps={{
            variant: "h4",
            color: "#fff",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            noWrap: "true",
            fontWeight: "bold",
          }}
          subheaderTypographyProps={{
            variant: "h6",
            color: "#ff9100",
            noWrap: "true",
            fontWeight: "bold",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          // sx={{
          //   p: 5
          // }}
        />
        {!!isPeople ? (
          <ProfileCardContent {...props} />
        ) : (
          <MainCardContent {...props} />
        )}
      </Link>
    </Grid>
  );
}
