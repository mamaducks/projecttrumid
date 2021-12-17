import Card from "@mui/material/Card";
import BadgeImprove from "./badgeupward.svg";
import BadgeAllWays from "./badgearrowslg.png";
import BadgeFixer from "./badgegear.svg";
import BadgeImprover from "./badgeup.png";
import BadgeFast from "./badgefastlg.png";
import BadgeStar from "./badgesuccess.svg";
import { Box, CardContent, CardHeader, Divider, Typography } from "@mui/material";

export function BadgeCard() {
  return (
    <Card>
      <Box >
        <CardHeader
          title="Badges"
        ></CardHeader>
        <Divider sx={{borderColor: "#ff9100"}}/>
        <br/>
        <CardContent sx={{ display: "flex" }}>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              // pt: 2
            }}
            title="mouse over"
          >
            <Box sx={{pb: 4}}>Improved</Box>
            <img src={BadgeImprove} alt="shield" height={70} width={70} />
          </Box>
        

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              // pt: 2
            }}
            title="mouse over"
          >
            <Box sx={{pb: 4}}>Improved</Box>
            <img src={BadgeImprove} alt="shield" height={70} width={70} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              // pt: 2
            }}
            title="mouse over"
          >
           <Box sx={{pb: 4}}> Helpful</Box>
            <img src={BadgeAllWays} alt="shield" height={70} width={70} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              // pt: 2
            }}
            title="mouse over"
          >
          

            <img src={BadgeFixer} alt="shield" height={70} width={70} />
            <Box sx={{pt: 2}}>Fixer</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              pt: 2
            }}
            title="mouse over"
          >
           

            <img src={BadgeImprover} alt="shield" height={70} width={70} />
            <Box sx={{pt: 2}}>Improvepng</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              // pt: 2
            }}
            title="mouse over"
          >
            

            <img src={BadgeFast} alt="shield" height={70} width={70} />
            <Box sx={{pt: 2}}>Fast</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              // pt: 2
            }}
            title="mouse over"
          >
            <Box sx={{pb: 4}}>Star</Box>

            <img src={BadgeStar} alt="shield" height={70} width={70} />
          </Box>
        </CardContent>
      </Box>
    </Card>

//  badges with map from data to edit and add above
// <Box
//               sx={{
//                 display: "flex",
//                 flexGrow: 1,
//                 justifyContent: "space-between",
//               }}
//             >
//               {badges.map((item) => (
//                 <Box title={item.title}>
//                   <ShieldIcon fontSize="large" />
//                   <Icon>
//                     <img
//                       src={BadgeImprove}
//                       alt="shield"
//                       height={25}
//                       width={25}
//                     />{" "}
//                   </Icon>
//                   <Box sx={{ typography: "subtitle3" }}>{item.name}</Box>

//                   <Box sx={{ typography: "subtitle1" }}>{item.desc}</Box>
//                 </Box>
//               ))}
//             </Box>


  );
}
