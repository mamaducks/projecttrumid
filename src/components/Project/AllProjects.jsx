import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { getAllProjectInfos } from "../../model/project";
import {PageHeader} from "../Headers/PageHeader";
import { GridCard } from "../Card/GridCard";
import { GridCardContainer } from "../Card/GridCardContainer";


export function AllProjects() {
  const projects = useRecoilValue(getAllProjectInfos);

  const projectsWithSrc = useMemo(
    () =>
      projects.map((item) => {
        const blob = new Blob([item.src], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        return { ...item, url };
      }),
    [projects]
  );

  return (
    <div>
        <PageHeader header="Trumid Center" subheader="Our Missions" isTrumid />
        
        <GridCardContainer>
          {projectsWithSrc.map((item) => (
            <GridCard
              link={`/project/${item.id}`}
              title={item.name}
              image={item.url}
              imageTitle={item.title}
              toolTip={item.desc}
              bottomText={item.desc}
            />
          ))}
        </GridCardContainer>

    </div>
  );
}
