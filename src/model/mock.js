import BadgeStar from "../img/badgesuccess.svg";


const badges = [
  {
    id: "first-responder",
    name: "First Responder",
    title: "Always responding to issues first",
    image: [<img  src={BadgeStar} alt="shield" height={70} width={70} />]

  },
  {
    id: "rapid-fixer",
    name: "Rapid Fixer",
    title: "Rapid turnaround time on fixing issues",
  },
  {
    id: "appreciated",
    name: "Appreciated",
    title: "Appreciated by another team member",
  },
];

const people = [
  {
    id: "dad",
    name: "David Duckworth",
    title: "Head of UI Engineering",
    badges: [
      { badgeId: "appreciated", desc: "I Love you" },
      { badgeId: "first-responder", desc: "For always answering stuff" },
    ],
    projects: [
      {
        projectId: "axe-finder",
        roles: ["contributor", "designer", "fe-developer"],
      },
      {
        projectId: "t3",
        roles: ["fe-developer", "designer"],
      },
    ],
  },
  {
    id: "lmd",
    name: "Leona Duckworth",
    title: "Consultant",
    badges: [{ badgeId: "first-responder", desc: "For always being awesome" }],
  },
  { id: "tt", name: "Tony Tiger", title: "CTO" },
];

const projects = [
  { id: "axe-finder", name: "Axe Finder", desc: "Axe Finder dialog for casts" },
  { id: "t3", name: "T3", desc: "Multi watchlist" },
  {
    id: "pt-vt",
    name: "PT List Voice Trade",
    desc: "Portfolio Trading Voice Trade",
  },
  { id: "pt-rfq", name: "List RFQ", desc: "List RFQ Trading" },
];

const roles = [
  { id: "contributor", name: "Contributor", desc: "Contributed to project" },
  { id: "designer", name: "Designer", desc: "Helper design UX" },
  { id: "product", name: "Product", desc: "Helper define business logic" },
  {
    id: "fe-developer",
    name: "Front End Developer",
    desc: "Helped code front end",
  },
  {
    id: "be-developer",
    name: "Back End Developer",
    desc: "Helped code back end",
  },
];

export const model = {
  badges,
  people,
  projects,
  roles,
};