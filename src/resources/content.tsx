import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Pribadi Ridwan",
  lastName: "Mulyono",
  name: `Pribadi Ridwan Mulyono`,
  role: "Software Engineer",
  avatar: "/images/profile.jpeg",
  email: "pribadiridwanmulyono@gmail.com",
  location: "Europe/Berlin",
  languages: ["Bahasa", "English", "German"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/pribadi1st",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pribadi1st/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/pre_buddy/",
    essential: false,
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Pribadi1st</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Pribadi Ridwan Mulyono, a software engineer, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/pribadi-ridwan-urrcqj/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Senior Software Engineer driven by the challenge of designing resilient architectures and mentoring engineering teams to reach higher standards. My expertise spans the full stack—from crafting user-focused UIs in React and Vue to managing complex AWS and Azure infrastructures. With a Master’s in Big Data Management and a proven track record of reducing system downtime and operational costs, I bridge the gap between robust engineering and business efficiency.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Paulsjob.ai (Hyrd GmbH)",
        timeframe: "April 2022 - November 2025",
        role: "Senior Fullstack Developer",
        achievements: [
          <>
            Led the end-to-end development of interactive web platforms utilizing Nuxt 3 (Vue.js) and Next.js (React.js) as the primary frontend frameworks and Ruby on Rails (RoR), Nest.js, and Golang as the backend frameworks to deliver high-quality user experiences.
          </>,
          <>
            Architected and optimized backend services using TypeScript, Golang, Node.js, Ruby, and AWS Lambda to reliably support high-scale workloads.
          </>,
          <>
            Managed Kubernetes infrastructure across AWS and Azure, overseeing cluster design, deployments, and Infrastructure as Code (IaC) with Terraform.
          </>,
          <>
            Designed CI/CD pipelines via GitHub Actions and ArgoCD, achieving a 70% improvement in deployment speed and reliability.
          </>,
          <>
            Enhanced platform security through OWASP-aligned hardening and implemented observability stacks (Grafana/Kibana) that reduced downtime by 25%.
          </>,
          <>
            Integrated Karpenter for optimized Kubernetes scaling and leveraged spot instances to significantly reduce operational costs.</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/paulsjob/paul-1.png",
            alt: "Paulsjob image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/paulsjob/paul-2.png",
            alt: "Paulsjob image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Airpaz.com",
        timeframe: "February 2018 - February 2020",
        role: "Frontend Engineer",
        achievements: [
          <>
            Spearheaded the rebuild of the Airpaz website using Nuxt.js, resulting in substantial performance gains and enhanced user engagement.
          </>,
          <>
            Developed and maintained cross-platform mobile applications for Android and iOS using React Native.
          </>,
          <>
            Designed AWS-based architectures for large-scale marketing campaigns, reducing operational overhead by 20%.
          </>,
          <>
            Partnered with backend teams for API integration and supported QA during UAT cycles to ensure stable production releases.
          </>
        ],
        images: [
          {
            src: "/images/projects/airpaz/airpaz-1.png",
            alt: "Airpaz image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bina Nusantara University",
        timeframe: "February 2016 - February 2018",
        role: "Teaching Assistant",
        achievements: [
          <>
            Provided technical instruction in various programming languages to students and supervised examination processes.
          </>,
          <>
            Contributed to curriculum development and assessment design to support student learning outcomes.
          </>,
          <>
            Conducted independent research and graded examinations to maintain high academic standards.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "IU International University of Applied Sciences, Bad Honnef, Germany",
        description: (
          <>
            Master of Science in Big Data Management[cite: 37, 39].
            Achieved a GPA of 1.7[cite: 40].
            Thesis: Sentiment Analysis of Public Posts based on Twitter Trending using Natural Language Processing[cite: 41].
          </>
        ),
      },
      {
        name: "Bina Nusantara University, Jakarta, Indonesia",
        description: (
          <>
            Bachelor of Computer Science[cite: 42, 44].
            Graduated with a GPA of 3.48/4.00[cite: 43, 45].
            Thesis: System design for recipe/bill management using OCR technology on mobile applications[cite: 46].
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Expert in building modern, high-performance web applications using Vue.js and React ecosystems.
            Proficient in NuxtJS, NextJS, and styling with Tailwind and UnoCss.
          </>
        ),
        tags: [
          { name: "VueJs", icon: "vuejs" },
          { name: "ReactJS", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "NextJS", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Backend Engineering",
        description: (
          <>
            Designing scalable, high-availability services and RESTful APIs using Golang, Node.js (NestJS),
            and Ruby on Rails. Experienced in managing both SQL and NoSQL databases.
          </>
        ),
        tags: [
          { name: "Golang", icon: "go" },
          { name: "Node.js", icon: "nodejs" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Ruby on Rails", icon: "rails" },
        ],
        images: [],
      },
      {
        title: "Infrastructure & DevOps",
        description: (
          <>
            Specialized in cloud-native environments using Kubernetes, Terraform, and Docker.
            Automating deployments with ArgoCD and GitHub CI/CD across AWS, Azure, and Google Cloud.
          </>
        ),
        tags: [
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Terraform", icon: "terraform" },
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
