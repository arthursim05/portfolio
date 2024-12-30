import { ExternalSite } from "../interfaces/external-site.interface"
import { SkillSection } from "../interfaces/skill-section.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/dhruvilrathod",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dhruvilrathod/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/dhruvilrathod/",
        simpleIconName: "leetcode",
        backgroundColor: "#FFA116",
    },
    {
        name: "Gmail",
        link: "mailto:thedhruvilrathod@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/dhruvil.rthd/",
        simpleIconName: "instagram",
        backgroundColor: "#FF0069",
    }
]


// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5", // this icon is not available in simple icon v14
        backgroundColor: "#E34F26", // manually checked
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    {
        name: "Sass",
        link: "https://sass-lang.com/",
        simpleIconName: "sass",
        backgroundColor: "#CC6699",
    },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "nodedotjs",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "ExpressJS",
        link: "https://expressjs.com/",
        simpleIconName: "express",
        backgroundColor: "#000000",
    },
    {
        name: "ThreeJS",
        link: "https://threejs.org/",
        simpleIconName: "threedotjs",
        backgroundColor: "#000000",
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        simpleIconName: "tailwindcss",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "PrimeNG",
        link: "https://primeng.org/",
        simpleIconName: "primeng",
        backgroundColor: "#DD0031",
    },
];

const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Building responsive website front-end using Angular",
        "Developing custom and interactive 3D websites",
        "Creating application backend in Node, Express & NestJS",
        "Managing data safely with PostgreSQL, MongoDB and OracleDB",
    ]
}




export const AppConfig = {
    loaderSplashAnimation: false,       // enable or disable splash screen at the initialization of website
    logoName: "Dhruvil Rathod",         // Signature font logo name in header
    name: "Dhruvil Rathod",             // your name
    professionalTitle: "Engineering | Development | Cyber Security",
    professionalSummary: "A results-driven software engineer with expertise in full-stack development of high-quality user-centric solutions in agile environments.",
    githubProfile: "https://github.com/dhruvilrathod",              // Your github profile link
    portfolioRepository: "https://github.com/dhruvilrathod",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
    ]
}
