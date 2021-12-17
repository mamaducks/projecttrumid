import { Icon, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import * as React from "react";
import BadgeImprove from "./badgeupward.svg";
import BadgeUp from "./badgeup.png"
export function BadgeIcon() {
  return (
   
      <>
      <Icon><img src={BadgeImprove} alt="shield" height={25} width={25}/> </Icon>
      <img src={BadgeImprove} alt="shield" height={40} width={40}/>
      <img src={BadgeUp} alt="shield" height={80} width={80}/>
      </>
  );
}
