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
            subtitle: "Software Developer",
            welcome:
              "Software Engineer with over 7 years of experience, specializing in Data Engineering and Machine Learning integration. Expert in building robust data pipelines with Python and SQL, developing Reinforcement Learning environments, and creating high-performance data visualizations. Proven track record in modernizing large-scale architectures and automating complex data workflows within AWS environments.",
            phone: "+52 (449) 108-9418",
            email: "david.fernando.esp@gmail.com",
            location: "Aguascalientes, México.",
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
            subtitle: "Desarrollador de Software",
            welcome:
              "Ingeniero de Software con más de 7 años de experiencia, especializado en Ingeniería de Datos e integración de Machine Learning. Experto en construir pipelines de datos robustos con Python y SQL, desarrollar entornos de Reinforcement Learning, y crear visualizaciones de datos de alto rendimiento. Historial comprobado en modernización de arquitecturas a gran escala y automatización de flujos de trabajo de datos complejos en entornos AWS.",
            phone: "+52 (449) 108-9418",
            email: "david.fernando.esp@gmail.com",
            location: "Aguascalientes, México.",
          },

          about: {
            title: "Acerca de Mí",
            description:
              "Soy un Desarrollador de Software en transición hacia Data Science, con un profundo enfoque en Machine Learning e Ingeniería de Datos. Mi experiencia radica en cerrar la brecha entre arquitecturas backend complejas y visualización de datos intuitiva. Actualmente, me enfoco en Reinforcement Learning (PPO, Gymnasium) y en construir pipelines de datos de extremo a extremo—desde web scraping y gestión de SQLite hasta dashboards interactivos de front-end. Combino una sólida base en Sistemas de Información Estratégica con años de experiencia profesional en Python, Django e infraestructura Cloud.",
          },

          skills: {
            title: "Habilidades Técnicas",
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
            project1: {
              title: "Agente ML de Trayectoria en Wikipedia",
              description:
                "Desarrollé un agente de Reinforcement Learning usando Gymnasium y PPO para navegar entre páginas aleatorias de Wikipedia a través de hipervínculos. Implementé entornos personalizados y estructuras de datos para optimizar la búsqueda de rutas dentro de una restricción de 30 pasos.",
            },
            project2: {
              title: "Pipeline de Análisis de Juegos",
              description:
                'Construí un repositorio de datos integral para analizar métricas de ejecución de "Blue Prince". Creé un proceso ETL personalizado en Python para extraer, limpiar y almacenar datos de juegos en SQLite, con una interfaz de entrada manual de datos para seguimiento de métricas de alta fidelidad.',
            },
            project3: {
              title: "Visualización de Datos de Portafolio",
              description:
                'Diseñé una plataforma personal de visualización de datos para mostrar métricas de repositorios y rendimiento de modelos ML, enfocándome en la "Separación de Responsabilidades" entre la capa de servicios de datos y el front-end basado en React.',
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
        },
      },
    },
  });

export default i18n;
