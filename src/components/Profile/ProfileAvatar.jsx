import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { useRecoilValue } from "recoil";
import { getProfileInfo } from "../../model/profile";

export function ProfileAvatar({ profileId }) {
  const profileInfo = useRecoilValue(getProfileInfo(profileId));

  if (!profileInfo) {
    return null;
  }

  const { projects, badges } = profileInfo;

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      color="primary"
      // color="#00a0ff"
      badgeContent={projects.length}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color="secondary"
        badgeContent={badges.length}
      >
        <Avatar
          alt={profileInfo.name}
          src="/static/images/avatar/2.jpg"
          sx={{ backgroundColor: "#32acf56b" }}
        />
      </Badge>
    </Badge>
  );
}
