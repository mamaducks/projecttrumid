import Box from "@mui/material/Box";
import { useRecoilValue } from "recoil";
import { getAllProfileInfos } from "../../model/profile";
import { GridCard } from "../Card/GridCard";
import { GridCardContainer } from "../Card/GridCardContainer";
import { PageHeader } from "../Headers/PageHeader";

export function AllProfiles() {
  const people = useRecoilValue(getAllProfileInfos);

  return (
    <Box>
      <PageHeader header="Trumid Center" subheader="Team Members" isTrumid />

      <GridCardContainer>
        {people.map((item) => (
          <GridCard
            link={`/profile/${item.id}`}
            title={item.name}
            subheader={item.title}
            projectsCount={item.projects.length}
            badgesCount={item.badges.length}
            isPeople
          />
        ))}
      </GridCardContainer>
    </Box>
  );
}
