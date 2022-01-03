import { Card, CardHeader, Grid, Link } from "@mui/material";
import { MainCardContent } from "./MainCardContent";
import { ProfileCardContent } from "./ProfileCardContent";

export function GridCard(props) {
  const { link, title, subheader, isPeople } = props;

  return (
    <Grid item component={Card} xs sx={{ m: 2 }}>
      <Link href={link}>
        <CardHeader title={title} subheader={subheader} />
        {!!isPeople ? (
          <ProfileCardContent {...props} />
        ) : (
          <MainCardContent {...props} />
        )}
      </Link>
    </Grid>
  );
}
