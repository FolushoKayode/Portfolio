import {
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  BarChart2,
  Brain,
  Activity,
  Users,
  PenTool,
  Lightbulb,
} from "lucide-react";

export const siteConfig = {
  name: "Folusho Kayode",
  role: "Business & Data Analyst",
  email: "folushoakinnawo@gmail.com",
  linkedin: "https://www.linkedin.com/in/folushokayode/",
  github: "https://github.com/FolushoKayode",
  resume:
    "https://drive.google.com/file/d/192WJQewXKltr1EZyeReSL21lyaYPF3ZE/view",
};

export const heroData = {
  headline: "Transforming Data into Decisions.",
  subheadline:
    "Business & Data Analyst | Master’s Student in Business Analytics & AI | 7+ Years in Software Quality and Process Optimization.",
  status: "Available for Summer 2026 Internship",
};

export const aboutData = {
  title: "About Me",
  content:
    "I am a Master’s student in Business Analytics & AI at Ontario Tech University with 7 years of experience defining, building, and executing processes and tests that measure and determine software quality. Proficient in Agile scrum, I combine my technical background with data-driven insights to solve real-world business problems efficiently. My goal is to use data, AI, and analytics to help companies make smarter and accurate decisions.",
  skills: [
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
    "Excel",
    "Agile/Scrum",
    "QA Testing",
    "Business Analytics",
    "Data Analysis",
    "Data Storytelling",
  ],
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  buttons: {
    label: string;
    link: string;
    type: "primary" | "secondary";
    isExternal?: boolean;
    isDownload?: boolean;
  }[];
};

export const projectsData: Project[] = [
  {
    id: "project-a",
    title: "Redesign of Florence Nightingale's Coxcomb Diagram",
    description:
      "A technical reproduction and redesign of the famous Coxcomb diagram using Python.",
    image: "/project-a.png",
    buttons: [
      {
        label: "View Redesign",
        link: "/coxcomb.html",
        type: "primary",
        isExternal: true,
      },
      {
        label: "View Github Python File",
        link: "https://github.com/FolushoKayode/Florence-Nightingale-Coxcomb-Redesign/blob/main/Redesign%20of%20Florence%20Nightingale's%20Coxcomb%20Diagram_Mofoluwasho%20Kayode.ipynb",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  {
    id: "project-b",
    title: "AI, Upskilling & Affordability",
    description:
      "A data-driven analysis on how the AI revolution is reshaping job stability for middle-aged workers in the Durham Region and GTA.",
    image: "/project-b.png",
    buttons: [
      {
        label: "View Presentation",
        link: "https://www.canva.com/design/DAG6wkKEAVE/GUX-oLZulfdQVNrY1tN5fw/edit?utm_content=DAG6wkKEAVE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        type: "primary",
        isExternal: true,
      },
      {
        label: "View Data Story",
        link: "https://drive.google.com/file/d/1GpU-YefSyupSw3fmyvJ-IOU3ikAyf3o_/view?usp=sharing",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  {
    id: "project-c",
    title: "Wearables in Healthcare (Infographic)",
    description:
      "A persuasive infographic visualizing the transformation of healthcare from reactive to proactive through wearable technology.",
    image: "/project-c.png",
    buttons: [
      {
        label: "View Infographic",
        link: "https://www.canva.com/design/DAG4hpyCsdg/78fwUPPDF3N1vJ96QzcL2g/edit?utm_content=DAG4hpyCsdg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        type: "primary",
        isExternal: true,
      },
      {
        label: "View Iterations",
        link: "https://drive.google.com/file/d/1o7Kcr3uubTNyQ_ic3BcUgPJNtowIA1Jc/view?usp=sharing",
        type: "secondary",
        isExternal: true,
      }, // Placeholder for local file
    ],
  },
  {
    id: "project-d",
    title: "Gender Equity in STEM (Data Storyboard)",
    description:
      "A human-centered data story addressing gender equity in education, specifically focusing on the girl child in STEM.",
    image: "/project-d.png",
    buttons: [
      {
        label: "View Storyboard",
        link: "https://www.canva.com/design/DAG0921_Ogw/OU1uz2VQRvht3t5qxcSKVQ/edit?utm_content=DAG0921_Ogw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        type: "primary",
        isExternal: true,
      },
      {
        label: "View Project Details",
        link: "https://drive.google.com/file/d/1rGK-JMJACfSgF8pwgHf2STdnhwJ8xOga/view?usp=sharing",
        type: "secondary",
        isExternal: true,
      }, // Placeholder for local file
    ],
  },
  {
    id: "project-e",
    title: "Litmus Trading Analytics Platform",
    description:
      "A Multi-Strategy Algorithmic Trading Analytics Platform Using Python, Backtrader, and Streamlit.",
    image: "/Project-ee.png",
    buttons: [
      {
        label: "View Presentation",
        link: "https://drive.google.com/file/d/1buRL43LrJxgPjlLrZA8dk605L7ZEWG3D/view?usp=sharing",
        type: "primary",
        isExternal: true,
      },
      {
        label: "View Github Python File",
        link: "https://github.com/FolushoKayode/Litmus-Trading-Analytics-Platform-/blob/main/Backtestapp.ipynb",
        type: "secondary",
        isExternal: true,
      }, // Placeholder for local file
    ],
  },
  {
    id: "project-f",
    title: "Impact of Visible Homelessness",
    description:
      "An Analytical Assessment of the Impact of Visible Homelessness on Retail Store Performance in Downtown Toronto.",
    image: "/Project-ff.png",
    buttons: [
      {
        label: "View Presentation",
        link: "https://drive.google.com/file/d/1wE5_LvnJndQiAP1ozMfzbc5nVJc39hCt/view?usp=sharing",
        type: "primary",
        isExternal: true,
      },
      {
        label: "View Report",
        link: "https://drive.google.com/file/d/1F3ZiT11wF925fwBMFq3pREu-8VVWzQEH/view?usp=sharing",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
];
