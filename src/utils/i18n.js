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
            title: "David Esparza - Portfolio",
            home: "Home",
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
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            contact: "Contact",
          },

          // Main Content Sections
          home: {
            title: "David Fernando Esparza Esparza",
            subtitle: "Software Developer",
            welcome:
              "Software Engineer with over 7 years of experience, specializing in Data Analytics and Machine Learning integration. Expert in building robust data pipelines with Python and SQL, developing Reinforcement Learning environments, and creating high-performance data visualizations. Proven track record in modernizing large-scale architectures and automating complex data workflows within AWS environments.",
            phone: "+52 (449) 108-9418",
            email: "David.Fernando.Esp@gmail.com",
            location: "Aguascalientes, México.",
            myGithub: "My Github",
            contactMe: "Contact me",
            seeResume: "Check my resume",
          },

          skills: {
            title: "Technical Skills",
            clickMe: "Click me!",
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
          fastLinks: {

          },

          projects: {
            title: "Data & ML Projects",
            subtitle: "Machine Learning & Analytical Engineering",
            viewOnGitHub: "View on GitHub",
            project1: {
              title: "Wikipedia Trajectory ML Agent",
              description:
                "Developed a Reinforcement Learning agent using Gymnasium and PPO to navigate between random Wikipedia pages via hyperlinks. Implemented custom environments and data structures to optimize pathfinding within a 30-step constraint.",
              tags: ["Custom Gymnasium Envs", "Reinforcement Learning", "PPO Algorithm", "Network Analysis", "Stable Baselines3"],
              githubUrl: "https://github.com/DavidEsparza/wikipedia-philosophy-route",
            },
            project2: {
              title: "Game Analytics Pipeline",
              description:
                'Built a comprehensive data repository for analyzing "Blue Prince" run metrics. Created a custom Python ETL process to scrape, clean, and store game data in SQLite, featuring a manual data-entry interface for high-fidelity metric tracking.',
              tags: ["Python", "Schema Design", "ETL Pipelines", "Pandas", "SQLite"],
              githubUrl: "https://github.com/DavidEsparza/Blue-prince-data-analysis",
            },
            project3: {
              title: "Portfolio Data Visualization",
              description:
                'Engineered a personal data-display platform to visualize repository metrics and ML model performance, focusing on the "Separation of Concerns" between the data service layer and the React-based front-end.',
              tags: ["React", "UI/UX for Data", "Responsive Design", "D3.js / Plotly", "Service Layer Architecture"],
              githubUrl: "https://github.com/DavidEsparza/my-professional-page",
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
              location: "Aguascalientes, México.",
              period: "September 2019 - June 2020",
              responsibilities: [
                "Migrated legacy corporate systems to modern Angular/JavaScript architectures and implemented RESTful APIs in C# for streamlined data flow.",
              ],
            },
            job3: {
              title: "Junior Developer",
              company: "Global Hitss",
              location: "Aguascalientes, México.",
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

          footer: {
            quickLinks: "Quick Links",
            connect: "Connect",
            contact: "Contact",
            location: "Aguascalientes, México",
            copyright: "© 2026 David Esparza. All rights reserved.",
            builtWith: "Built with React",
          },
        },
      },
      es: {
        translation: {
          // Top Navbar
          navbar: {
            title: "David Esparza - Portafolio",
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
            subtitle: "Desarrollador de Software",
            welcome:
              "Ingeniero de Software con más de 7 años de experiencia, especializado en Análisis de Datos e integración de Machine Learning. Experto en construir pipelines de datos robustos con Python y SQL, desarrollar entornos de Reinforcement Learning, y crear visualizaciones de datos de alto rendimiento. Historial comprobado en modernización de arquitecturas a gran escala y automatización de flujos de trabajo de datos complejos en entornos AWS.",
            phone: "+52 (449) 108-9418",
            email: "David.Fernando.Esp@gmail.com",
            location: "Aguascalientes, México.",
            myGithub: "Mi Github",
            contactMe: "Contáctame",
            seeResume: "Ver mi currículum",
          },

          skills: {
            title: "Habilidades Técnicas",
            clickMe: "¡Haz clic!",
            dataScience: {
              title: "Data Science y ML",
              items:
                "Python (Pandas, NumPy), Reinforcement Learning (Gymnasium, PPO), Web Scraping (BeautifulSoup), Modelado de Datos, Pipelines ETL",
            },
            backEnd: {
              title: "Back-End y BD",
              items:
                "Python (Django), SQL (SQLite, PostgreSQL), MeiliSearch, Elasticsearch, RESTful APIs, C# (.NET)",
            },
            visualization: {
              title: "Visualización y Front-End",
              items:
                "React, Astro, Dashboards de Datos, UI/UX para Herramientas de Datos, JavaScript (ES6+), HTML5/CSS",
            },
            cloud: {
              title: "Nube y DevOps",
              items:
                "AWS (S3, EC2), Docker, Git, Gestión de Configuración, Linux",
            },
            languages: {
              title: "Idiomas",
              items: "Español (Nativo), Inglés (Avanzado)",
            },
          },

          projects: {
            title: "Proyectos de Datos y ML",
            subtitle: "Machine Learning e Ingeniería Analítica",
            viewOnGitHub: "Ver en GitHub",
            project1: {
              title: "Agente ML de Trayectoria en Wikipedia",
              description:
                "Desarrollé un agente de Reinforcement Learning usando Gymnasium y PPO para navegar entre páginas aleatorias de Wikipedia a través de hipervínculos. Implementé entornos personalizados y estructuras de datos para optimizar la búsqueda de rutas dentro de una restricción de 30 pasos.",
              tags: ["Entornos Gymnasium Personalizados", "Reinforcement Learning", "Algoritmo PPO", "Análisis de Redes", "Stable Baselines3"],
              githubUrl: "https://github.com/DavidEsparza/wikipedia-philosophy-route",
            },
            project2: {
              title: "Pipeline de Análisis de Juegos",
              description:
                'Construí un repositorio de datos integral para analizar métricas de ejecución de "Blue Prince". Creé un proceso ETL personalizado en Python para extraer, limpiar y almacenar datos de juegos en SQLite, con una interfaz de entrada manual de datos para seguimiento de métricas de alta fidelidad.',
              tags: ["Python", "Diseño de Esquemas", "Pipelines ETL", "Pandas", "SQLite"],
              githubUrl: "https://github.com/DavidEsparza/Blue-prince-data-analysis",
            },
            project3: {
              title: "Visualización de Datos de Portafolio",
              description:
                'Diseñé una plataforma personal de visualización de datos para mostrar métricas de repositorios y rendimiento de modelos ML, enfocándome en la "Separación de Responsabilidades" entre la capa de servicios de datos y el front-end basado en React.',
              tags: ["React", "UI/UX para Datos", "Diseño Responsivo", "D3.js / Plotly", "Arquitectura de Capa de Servicios"],
              githubUrl: "https://github.com/DavidEsparza/my-professional-page",
            },
          },

          experience: {
            title: "Experiencia Profesional",
            job1: {
              title: "Desarrollador Full Stack (Enfoque en Datos)",
              company: "iad México",
              location: "Ciudad de México, México",
              period: "Julio 2021 - Septiembre 2025",
              responsibilities: [
                "Arquitecturé y mantuve sistemas backend escalables usando Python/Django y AWS, enfocándome en integridad de datos y rendimiento de APIs.",
                "Automaticé la generación de documentos y reportes a través de motores de plantillas complejos, reduciendo el tiempo de procesamiento manual para datos empresariales esenciales.",
                "Lideré la modernización técnica de plataformas front-end usando Astro y React, mejorando la interacción del usuario con interfaces web intensivas en datos.",
              ],
            },
            job2: {
              title: "Desarrollador de Software",
              company: "BOZ",
              location: "Aguascalientes, México.",
              period: "Septiembre 2019 - Junio 2020",
              responsibilities: [
                "Migré sistemas corporativos heredados a arquitecturas modernas Angular/JavaScript e implementé APIs RESTful en C# para flujo de datos simplificado.",
              ],
            },
            job3: {
              title: "Desarrollador Junior",
              company: "Global Hitss",
              location: "Aguascalientes, México.",
              period: "Febrero - Junio 2019",
              responsibilities: [
                "Gestioné el desarrollo de un portal centralizado de tickets, supervisando interacciones de base de datos y lógica del portal para un equipo de 6 desarrolladores.",
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

          footer: {
            quickLinks: "Enlaces Rápidos",
            connect: "Conectar",
            contact: "Contacto",
            location: "Aguascalientes, México",
            copyright: "© 2026 David Esparza. Todos los derechos reservados.",
            builtWith: "Construido con React",
          },
        },
      },
    },
  });

export default i18n;
