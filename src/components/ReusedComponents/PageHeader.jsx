import { CardContent, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Trumid from "../../patchtrumid.svg";

// export function PageHeader({ title, subheader }) {
//   return (
//     <Grid item>
//       <Box alignItems="center">
//         <CardContent
//           sx={{
//             display: "flex",
//             color: "primary",
//             justifyContent: "center",
//             alignContent: "center",
//             pt: 10,
//           }}
//         >
//           <Box alignSelf="center" pr={4}>
//             <img
//               src={Trumid}
//               alt="mission"
//               height="70vw"
//               width="auto"
//               alignSelf="center"
//             />
//           </Box>

//           <Box
//             sx={{
//               color: "primary",
//               verticalAlign: "middle",
//               lineHeight: "0.5",
//             }}
//           >
//             <Box typography="h2" color="#011e4b" verticalAlign="middle">
//               {title}
//             </Box>

//             <Box typography="h3" color="#ff9100" pl={1} verticalAlign="middle">
//               {subheader}
//             </Box>
//           </Box>
//         </CardContent>
//       </Box>
//     </Grid>
//   );
// }

export function PageHeader({ image, imageTitle, header, subheader }) {
  return (
    <Grid item>
      <Box alignItems="center">
        <CardContent
        sx={{
          display: "flex",
          color: "primary",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: 10,
        }}>
          <Box alignSelf="center" pr={4}>
            <img
              src={image}
              alt={imageTitle}
              height="70vw"
              width="auto"
              alignSelf="center"
            />
          </Box>

          <Box
            sx={{
              color: "primary",
              verticalAlign: "middle",
              lineHeight: "0.5",
            }}
          >

            <Box typography="h2" color="#011e4b" verticalAlign="middle">
              {header}
            </Box>

            <Box typography="h3" color="#ff9100" verticalAlign="middle">
              {subheader}
            </Box>

          </Box>
        </CardContent>
      </Box>
    </Grid>
  );
}

// export function ProfileHeader({ name, title }) {
//   return (
//     <Grid item py={8}>
//       <CardContent sx={{ display: "flex", justifyContent: "center", py: 4 }}>
//         <div>
//           <Box alignSelf="center" pr={4}>
//             <img
//               src={Trumid}
//               alt="mission"
//               height="70vw"
//               width="auto"
//               alignSelf="center"
//             />
//           </Box>
//           <Box typography="h1" color="#011e4b">
//             {name}
//           </Box>
//           <Box display="flex">
//             <Box
//               sx={{
//                 alignContent: "flex-start",
//                 flexGrow: 1,
//                 fontSize: "h4",
//                 alignItems: "center",
//                 color: "#ff9100",
//                 letterSpacing: 1,
//                 paddingLeft: 3,
//               }}
//             >
//               {title}
//             </Box>
//           </Box>
//         </div>
//       </CardContent>
//     </Grid>
//   );
// }
