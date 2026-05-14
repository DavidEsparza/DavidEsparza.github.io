import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // Top Navbar
          navbar: {
            home: "Home",
            about: "About",
            portfolio: "Portfolio",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            contact: "Contact",
            english: "English",
            spanish: "Spanish",
          },

          // Sidebar Quick Links
          sidebar: {
            title: "Quick Links",
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            contact: "Contact",
          },

          // Main Content Sections
          home: {
            title: "David Fernando Esparza Esparza",
            subtitle: "Data Engineer & Software Developer",
            welcome:
              "Software Engineer with over 7 years of experience, specializing in Data Engineering and Machine Learning integration. Expert in building robust data pipelines with Python and SQL, developing Reinforcement Learning environments, and creating high-performance data visualizations. Proven track record in modernizing large-scale architectures and automating complex data workflows within AWS environments.",
            phone: "+52 (449) 108-9418",
            email: "david.fernando.esp@gmail.com",
            location: "Aguascalientes, Ags.",
          },

          about: {
            title: "About Me",
            description:
              "I am a Software Developer transitioning into Data Science, with a deep focus on Machine Learning and Data Engineering. My expertise lies in bridging the gap between complex backend architectures and intuitive data visualization. Currently, I am focused on Reinforcement Learning (PPO, Gymnasium) and building end-to-end data pipelines—from web scraping and SQLite management to interactive front-end dashboards. I combine a strong foundation in Strategic Information Systems with years of professional experience in Python, Django, and Cloud infrastructure.",
          },

          skills: {
            title: "Technical Skills",
            dataScience: {
              title: "Data Science & ML",
              items:
                "Python (Pandas, NumPy), Reinforcement Learning (Gymnasium, PPO), Web Scraping (BeautifulSoup), Data Modeling, ETL Pipelines",
            },
            backEnd: {
              title: "Back-End & DB",
              items:
                "Python (Django), SQL (SQLite, PostgreSQL), MeiliSearch, Elasticsearch, RESTful APIs, C# (.NET)",
            },
            visualization: {
              title: "Visualization & Front-End",
              items:
                "React, Astro, Data Dashboards, UI/UX for Data Tools, JavaScript (ES6+), HTML5/CSS",
            },
            cloud: {
              title: "Cloud & DevOps",
              items:
                "AWS (S3, EC2), Docker, Git, Configuration Management, Linux",
            },
            languages: {
              title: "Languages",
              items: "Spanish (Native), English (Advanced)",
            },
          },

          projects: {
            title: "Data & ML Projects",
            subtitle: "Machine Learning & Analytical Engineering",
            project1: {
              title: "Wikipedia Trajectory ML Agent",
              description:
                "Developed a Reinforcement Learning agent using Gymnasium and PPO to navigate between random Wikipedia pages via hyperlinks. Implemented custom environments and data structures to optimize pathfinding within a 30-step constraint.",
            },
            project2: {
              title: "Game Analytics Pipeline",
              description:
                'Built a comprehensive data repository for analyzing "Blue Prince" run metrics. Created a custom Python ETL process to scrape, clean, and store game data in SQLite, featuring a manual data-entry interface for high-fidelity metric tracking.',
            },
            project3: {
              title: "Portfolio Data Visualization",
              description:
                'Engineered a personal data-display platform to visualize repository metrics and ML model performance, focusing on the "Separation of Concerns" between the data service layer and the React-based front-end.',
            },
          },
          experience: {
            title: "Professional Experience",
            job1: {
              title: "Full Stack Developer (Data Focus)",
              company: "iad México",
              location: "Mexico City, Mexico",
              period: "July 2021 - September 2025",
              responsibilities: [
                "Architected and maintained scalable backend systems using Python/Django and AWS, focusing on data integrity and API performance.",
                "Automated document and report generation through complex templating engines, reducing manual processing time for essential business data.",
                "Led technical modernization of front-end platforms using Astro and React, improving user interaction with data-heavy web interfaces.",
              ],
            },
            job2: {
              title: "Software Developer",
              company: "BOZ",
              location: "Aguascalientes, Ags.",
              period: "September 2019 - June 2020",
              responsibilities: [
                "Migrated legacy corporate systems to modern Angular/JavaScript architectures and implemented RESTful APIs in C# for streamlined data flow.",
              ],
            },
            job3: {
              title: "Junior Developer",
              company: "Global Hitss",
              location: "Aguascalientes, Ags.",
              period: "February - June 2019",
              responsibilities: [
                "Managed the development of a centralized ticketing portal, overseeing database interactions and portal logic for a 6-developer team.",
              ],
            },
          },

          education: {
            title: "Education",
            degree1: {
              title: "Strategic Information Systems Engineering",
              institution: "Polytechnic University of Aguascalientes",
              period: "2015 - 2019",
            },
            degree2: {
              title: "Technical Career in Accounting",
              institution: 'Cbtis 39 "Leona Vicario"',
              period: "2012 - 2015",
            },
          },

          contact: {
            title: "Contact",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            sendButton: "Send",
          },

          experience: {
            title: "Professional Experience",
            job1: {
              title: "Full Stack Developer",
              company: "iad México",
              location: "México City, México",
              period: "July 2021 - September 2025",
              responsibilities: [
                "UX development: Technical management of the complete redesign of the main portal using Astro and React/styled-jsx, with a focus on usability and performance.",
                "Product Automation: Implemented templating for the automatic generation of essential documents, including emails and PDFs.",
                "Full-Stack Architecture: Backend maintenance and scalability with Python/Django and AWS services.",
              ],
            },
            job2: {
              title: "Developer",
              company: "BOZ",
              location: "Aguascalientes, Ags.",
              period: "September 2019 - June 2020",
              responsibilities: [
                "Front-end migration of the corporate system from WPF to Angular/JavaScript and implementation of RESTful APIs in C#.",
              ],
            },
            job3: {
              title: "Junior Developer",
              company: "Global Hitss",
              location: "Aguascalientes, Ags.",
              period: "February - June 2019",
              responsibilities: [
                "Led the development of a ticketing management web portal using C# .NET working with a team of 6 developers.",
              ],
            },
          },

          education: {
            title: "Education",
            degree1: {
              title: "Strategic Information Systems Engineering",
              institution: "Polytechnic University of Aguascalientes",
              period: "2015 - 2019",
            },
            degree2: {
              title: "Technical Career in Accounting",
              institution: 'Cbtis 39 "Leona Vicario"',
              period: "2012 - 2015",
            },
          },

          contact: {
            title: "Contact",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            sendButton: "Send",
          },
        },
      },
      es: {
        translation: {
          // Top Navbar
          navbar: {
            home: "Inicio",
            about: "Acerca de",
            portfolio: "Portafolio",
            skills: "Habilidades",
            projects: "Proyectos",
            experience: "Experiencia",
            education: "Educación",
            contact: "Contacto",
            english: "Inglés",
            spanish: "Español",
          },

          // Sidebar Quick Links
          sidebar: {
            title: "Enlaces Rápidos",
            home: "Inicio",
            about: "Acerca de",
            skills: "Habilidades",
            projects: "Proyectos",
            experience: "Experiencia",
            education: "Educación",
            contact: "Contacto",
          },

          // Main Content Sections
          home: {
            title: "David Fernando Esparza Esparza",
            subtitle: "Desarrollador Front-End Senior",
            welcome:
              "Desarrollador Front-End Senior con más de 7 años de experiencia, especializado en React y altamente enfocado en la Experiencia de Usuario (UX). Liderazgo comprobado en proyectos de modernización web a gran escala, utilizando Astro y styled-jsx asegurando escalabilidad y mantenibilidad con arquitectura Python/Django y AWS.",
            phone: "+52 (449) 108-9418",
            email: "david.fernando.esp@gmail.com",
            location: "Aguascalientes, Ags.",
          },

          about: {
            title: "Acerca de Mí",
            description:
              "Desarrollador Front-End Senior con más de 7 años de experiencia, especializado en React y altamente enfocado en la Experiencia de Usuario (UX). Liderazgo comprobado en proyectos de modernización web a gran escala, utilizando Astro y styled-jsx asegurando escalabilidad y mantenibilidad con arquitectura Python/Django y AWS.",
          },

          skills: {
            title: "Habilidades",
            frontEnd: {
              title: "Front-End",
              items:
                "React, JavaScript (ES6+), Astro, styled-jsx, Ant Design, UI/UX, Angular, HTML5/CSS, React Native",
            },
            backEnd: {
              title: "Back-End y BD",
              items:
                "Python (Django), C# (.NET), SQL, MeiliSearch, Elasticsearch, C++",
            },
            cloud: {
              title: "Nube y Herramientas",
              items: "AWS (S3, EC2), Git, Docker, RESTful APIs",
            },
            languages: {
              title: "Idiomas",
              items: "Español (Nativo), Inglés (Avanzado)",
            },
            soft: {
              title: "Habilidades Blandas",
              items:
                "Liderazgo Técnico, Comunicación Ejecutiva, Pensamiento Crítico",
            },
          },

          projects: {
            title: "Proyectos",
            subtitle: "Proyectos y Logros Clave",
            project1: {
              title: "Rediseño del Portal - iad México",
              description:
                "Gestión técnica del rediseño completo del portal principal usando Astro y React/styled-jsx, con enfoque en usabilidad y rendimiento.",
            },
            project2: {
              title: "Automatización de Productos - iad México",
              description:
                "Implementé plantillas para la generación automática de documentos esenciales, incluyendo correos electrónicos y PDFs.",
            },
            project3: {
              title: "Migración Front-end - BOZ",
              description:
                "Lideré la migración front-end del sistema corporativo de WPF a Angular/JavaScript e implementación de APIs RESTful en C#.",
            },
          },

          experience: {
            title: "Experiencia Profesional",
            job1: {
              title: "Desarrollador Full Stack",
              company: "iad México",
              location: "Ciudad de México, México",
              period: "Julio 2021 - Septiembre 2025",
              responsibilities: [
                "Desarrollo UX: Gestión técnica del rediseño completo del portal principal usando Astro y React/styled-jsx, con enfoque en usabilidad y rendimiento.",
                "Automatización de Productos: Implementé plantillas para la generación automática de documentos esenciales, incluyendo correos electrónicos y PDFs.",
                "Arquitectura Full-Stack: Mantenimiento y escalabilidad del backend con Python/Django y servicios AWS.",
              ],
            },
            job2: {
              title: "Desarrollador",
              company: "BOZ",
              location: "Aguascalientes, Ags.",
              period: "Septiembre 2019 - Junio 2020",
              responsibilities: [
                "Migración front-end del sistema corporativo de WPF a Angular/JavaScript e implementación de APIs RESTful en C#.",
              ],
            },
            job3: {
              title: "Desarrollador Junior",
              company: "Global Hitss",
              location: "Aguascalientes, Ags.",
              period: "Febrero - Junio 2019",
              responsibilities: [
                "Lideré el desarrollo de un portal web de gestión de tickets usando C# .NET trabajando con un equipo de 6 desarrolladores.",
              ],
            },
          },

          education: {
            title: "Educación",
            degree1: {
              title: "Ingeniería en Sistemas de Información Estratégica",
              institution: "Universidad Politécnica de Aguascalientes",
              period: "2015 - 2019",
            },
            degree2: {
              title: "Carrera Técnica en Contabilidad",
              institution: 'Cbtis 39 "Leona Vicario"',
              period: "2012 - 2015",
            },
          },

          contact: {
            title: "Contacto",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Correo Electrónico",
            messagePlaceholder: "Mensaje",
            sendButton: "Enviar",
          },
        },
      },
    },
  });

export default i18n;
