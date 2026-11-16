import {
  BarChart2,
  Brain,
  Users,
  Lightbulb,
} from "lucide-react";

export const siteConfig = {
  name: "Folusho Kayode",
  role: "Business Analysis | Data Analytics | Artificial Intelligence",
  email: "folushoakinnawo@gmail.com",
  linkedin: "https://www.linkedin.com/in/folushokayode/",
  github: "https://github.com/FolushoKayode",
  resume: "/Folusho_Kayode_Resume.pdf",
};

export const heroData = {
  headline: "Business Analysis | Data Analytics | Artificial Intelligence",
  subheadline:
    "I connect business needs with data and technology, clarifying problems, uncovering useful insights, and helping teams improve processes and make informed decisions. I’m especially interested in applying AI to practical business challenges.",
};

export const aboutData = {
  title: "About Me",
  content: [
    "I’m a technology professional whose work spans business processes, systems, data, and software delivery. Across banking, financial services, and technology, I’ve worked with cross-functional teams to clarify needs, validate workflows, and improve how solutions support the people who use them.",
    "With a Master of Business Analytics and Artificial Intelligence from Ontario Tech University, I combine business analysis with data-driven thinking. I’m interested in using analytics and emerging AI responsibly to identify practical opportunities, improve processes, and support better decisions.",
  ],
  whatIBring: [
    {
      title: "Business Understanding",
      description: "Connecting business needs with practical technology solutions",
      icon: Users,
    },
    {
      title: "Analytical Thinking",
      description: "Exploring data to uncover patterns and support informed decision-making",
      icon: BarChart2,
    },
    {
      title: "Practical AI Applications",
      description: "Applying AI tools to improve workflows and problem-solving",
      icon: Brain,
    },
    {
      title: "Solution Validation",
      description: "Ensuring solutions meet business needs and work as intended.",
      icon: Lightbulb,
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  isGroupProject?: boolean;
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
    id: "project-b",
    title: "AI, Upskilling & Affordability",
    description:
      "A data-driven analysis on how the AI revolution is reshaping job stability for middle-aged workers in the Durham Region and GTA. The group project uses statistical analysis and data visualization to examine AI adoption, workforce upskilling, affordability, and workforce readiness.",
    image: "/project-b.png",
    isGroupProject: true,
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
    id: "project-e",
    title: "Litmus Trading Analytics Platform",
    description:
      "A Multi-Strategy Algorithmic Trading Analytics Platform Using Python, Backtrader, and Streamlit. The group project uses Python and Streamlit to analyze and evaluate algorithmic trading strategies, focusing on performance, system behaviour, and outcome metrics.",
    image: "/Project-ee.png",
    isGroupProject: true,
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
