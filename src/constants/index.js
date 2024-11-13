import project1 from "../assets/projects/toy_story_project.png";
import project2 from "../assets/projects/step_stone_project.png";
import project3 from "../assets/projects/word_mafia_project.jpeg";

export const HERO_CONTENT = `I am a passionate backend & DevOps developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in back-end technologies like Java Springboot and FastAPI, as well as CI/CD technologies like Docker and Jenkins.\n Finally, I really enjoy competitive programming and solving problems using various algorithms`;

// About should be changed to award
export const ABOUT_TEXT = "ICPC Rocky Mountain 2024 Regional– 9th(among 54 teams)\n\n ICPC Rocky Mountain 2023 Regional– 14th(among 46 teams)\n\n 2024 SKT Fly AI Hackathon– 3rd\n\n";

export const EXPERIENCES = [
  {
    year: "2024/06 - 2024/08",
    role: "MLOps Engineer Intern",
    company: "SK Telecom",
    description: `Trained AI model for wasp detector using bee frequency data and image data using FFT Wav2Vec2.0 and YOLOv8 deep sort. Deployed AI model 3 with docker and Azure.`,
    technologies: ["Pytorch", "FastAPI", "Azure", "Docker"],
  },
  {
    year: "2023/06 - 2023/08",
    role: "Software Engineer Intern",
    company: "Karrot",
    description: `Built interlocking servers of company product by using Springboot and JPA. Deployed server with k8s, using helm chart and managed servers with CI/CD pipeline. Test Coverage 80% achieved, increased code quality with sonarqube.`,
    technologies: ["Java", "Springboot", "MySQL", "Junit5", "Jenkins","K8s","ELK"],
  },
  {
    year: "2023/06 - 2023/08",
    role: "Summer Research Intern",
    company: "DePauw University",
    description: `Developed a movie recommendation system based on content-based filtering and collaborative filtering using K-means clustering method. Wrote a research paper comparing recommendation system using content-based and collaborative filtering based on the developed system.`,
    technologies: ["Python","Recommendation System", "Scikit-learn", "K-Means Clustering"],
  },
  {
    year: "2022/05 - 2023/07",
    role: "Software Engineer Intern",
    company: "Coupang",
    description: `Successfully completed the project by going through the software development process; code analysis -> design document -> Implementation & test codes (80% coverage) -> deploy & test on lower environments (development, QA)`,
    technologies: ["Java","Springboot", "MySQL", "Junit5","Docker"],
  },
  {
    year: "2020/07 - 2022/04",
    role: "Military Police",
    company: "Republic of Korea Air Force",
    description: `Served as a military police officer at the Korea Air Force Academy in Cheongju, South Korea. Led a counter-terrorism squad and served as the leader of platoon barracks. Selected as one of 100 military police soldiers (acceptance rate: 2%) for Seoul ADEX 2021.`,
    technologies: ["Leadership", "Responsibility"],
  },
];

export const PROJECTS = [
  {
    title: "Toy Story: Imagination in your hand",
    image: project1,
    description:
      "Team project with 5 members: Developed a Flutter application that helps children convert their drawings or speech into 3D models.\nChildren can also transform the 3D model into a real toy by printing it using a 3D printer.\nWorkflow: Children’s Speech or Drawing → Speech-to-Text (STT) or Image-to-Text → Generate Image from Text → Large Reconstruction Model (LRM) to convert 2D image (.png) to 3D model (.obj, .stl) → 3D model or real toy (via 3D printer)",
    technologies: ["Flutter", "FastAPI", "TripoSR", "Large Reconstruction Model", "Amazon S3 EC2","Docker","Blender","Dall-E 3"],
  },
  {
    title: "StepStone",
    image: project2,
    description:
      "Team project with 3 members: Developed a website that connects developers with underprivileged people.\nIt is a website where developers can donate their talent to solve problems of the underprivileged ",
    technologies: ["Java", "Spring", "Docker", "MariaDB","Jenkins"],
  },
  {
    title: "WordMafia",
    image: project3,
    description:
      "Individual project: Developed a simple android game app helps user play Word Mafia offline.\n Applied MVC pattern and Singleton pattern to the architecture.\n",
    technologies: ["Java(Android Studio)", "SQLite", "XML", "Database Design"],
  },
];

export const CONTACT = {
  address: "4 Heritage Halls #4217 Provo, Utah 84602",
  phoneNo: "+1 385-221-8754 ",
  email: "korea19800@gmail.com",
};
