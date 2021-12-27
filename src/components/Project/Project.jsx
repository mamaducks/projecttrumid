import { CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import * as React from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProjectInfo } from "../../model/project";
import AppBar from "../Dashboard/AppBar";
import { ProfileAvatar } from "../Profile/ProfileAvatar";
import { ProjectHeader } from "../ReusedComponents/PageHeader";
import { SectionHeader } from "../ReusedComponents/SectionHeader";

export function Project() {
  const { projectId } = useParams();
  const projectInfo = useRecoilValue(getProjectInfo(projectId));

  const projectInfoWithSrc = useMemo(() => {
    const blob = new Blob([projectInfo.src], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    return { ...projectInfo, url };
  }, [projectInfo]);

  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  console.log(projectInfo);

  const { name, desc, url, roles = [] } = projectInfoWithSrc;

  return (
    <div>
      <AppBar />

      <ProjectHeader
        image={url}
        imageTitle={name}
        header={name}
        subheader={desc}
      />

      <Container maxWidth="lg">
        {roles.map((item) => (
          <>
            <SectionHeader>{item.name}s</SectionHeader>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridAutoFlow: "row",
                columnGap: 1,
                rowGap: 5,
                pt: 6,
                pb: 5,
              }}
            >
              {item.people.map((item) => (
                <Container maxWidth="md">
                  <CardContent>
                    <Link
                      href={`/profile/${item.id}`}
                      underline="none"
                      fontSize="1rem"
                      fontWeight="600"
                      noWrap="true"
                      sx={{
                        overflow: "visible",
                        textTransform: "capitalize",
                        fontVariant: "subtitle1",
                      }}
                    >
                      <ProfileAvatar profileId={item.id} /> {item.name}
                    </Link>
                  </CardContent>
                </Container>
              ))}
            </Box>
          </>
        ))}
      </Container>
    </div>
  );
}
