import { Avatar, Badge, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TrumidPatch from "../../utilities/patchtrumid.svg";
import TrumidAvatar from "../../utilities/trumidavatarbadge.svg";

const useStyles = makeStyles((theme) => ({
  avatarBadge: {
    margin: theme.spacing(2),
    width: "auto",
    height: "auto",
  },
  avatarPatch: {
    margin: theme.spacing(1),
    width: "auto",
    height: "auto",
  },
}));

export const ProfileCardContent = ({ projectsCount, badgesCount }) => {
  const classes = useStyles();
  return (
    <>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Badge badgeContent={projectsCount}>
          <Avatar
            className={classes.avatarPatch}
            src={TrumidPatch}
            alt="badge"
          />
        </Badge>
        <Badge badgeContent={badgesCount}>
          <Avatar
            className={classes.avatarBadge}
            src={TrumidAvatar}
            alt="badge"
          />
        </Badge>
      </CardContent>
    </>
  );
};
