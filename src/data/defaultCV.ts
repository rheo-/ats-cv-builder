import type { CVData } from "../types/cv";

export const defaultCV: CVData = {
  personal: {
    name: "Taro Yamato",
    email: "yamato@example.com",
    phone: "+81 90 1234 5678",
    location: "Tokyo, Japan",
    linkedin: "linkedin.com/in/yamato.t",
    website: ""
  },

  summary:
    "Software engineer with experience building web applications and data-driven systems.",

  experience: [
    {
      company: "Example Corporation",
      position: "Software Engineer",
      location: "Tokyo, Japan",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Developed web applications using React and TypeScript.",
        "Improved application performance and reduced load times.",
        "Collaborated with cross-functional teams to deliver new features."
      ]
    }
  ],

  education: [
    {
      institution: "Example University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2020",
      endDate: "2024"
    }
  ],

  skills: [
    "TypeScript",
    "React",
    "Python",
    "SQL",
    "Git"
  ],

  projects: []
};