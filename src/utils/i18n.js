import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // Top Navbar
          navbar: {
            home: 'Home',
            about: 'About',
            portfolio: 'Portfolio',
            skills: 'Skills',
            projects: 'Projects',
            experience: 'Experience',
            education: 'Education',
            contact: 'Contact',
            english: 'English',
            spanish: 'Spanish'
          },
          
          // Sidebar Quick Links
          sidebar: {
            title: 'Quick Links',
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            experience: 'Experience',
            education: 'Education',
            contact: 'Contact'
          },
          
          // Main Content Sections
          home: {
            title: 'Home',
            welcome: 'Welcome to my portfolio'
          },
          
          about: {
            title: 'About',
            description: 'Information about me'
          },
          
          skills: {
            title: 'Skills',
            javascript: 'JavaScript',
            react: 'React',
            nodejs: 'Node.js'
          },
          
          projects: {
            title: 'Projects',
            project1: {
              title: 'Project 1',
              description: 'Project description'
            },
            project2: {
              title: 'Project 2',
              description: 'Project description'
            }
          },
          
          experience: {
            title: 'Experience',
            jobTitle: 'Job Title',
            companyName: 'Company Name',
            period: '2020 - Present'
          },
          
          education: {
            title: 'Education',
            degree: 'Degree',
            universityName: 'University Name',
            period: '2015 - 2019'
          },
          
          contact: {
            title: 'Contact',
            namePlaceholder: 'Name',
            emailPlaceholder: 'Email',
            messagePlaceholder: 'Message',
            sendButton: 'Send'
          }
        }
      },
      es: {
        translation: {
          // Top Navbar
          navbar: {
            home: 'Inicio',
            about: 'Acerca de',
            portfolio: 'Portafolio',
            skills: 'Habilidades',
            projects: 'Proyectos',
            experience: 'Experiencia',
            education: 'Educación',
            contact: 'Contacto',
            english: 'Inglés',
            spanish: 'Español'
          },
          
          // Sidebar Quick Links
          sidebar: {
            title: 'Enlaces Rápidos',
            home: 'Inicio',
            about: 'Acerca de',
            skills: 'Habilidades',
            projects: 'Proyectos',
            experience: 'Experiencia',
            education: 'Educación',
            contact: 'Contacto'
          },
          
          // Main Content Sections
          home: {
            title: 'Inicio',
            welcome: 'Bienvenido a mi portafolio'
          },
          
          about: {
            title: 'Acerca de',
            description: 'Información sobre mí'
          },
          
          skills: {
            title: 'Habilidades',
            javascript: 'JavaScript',
            react: 'React',
            nodejs: 'Node.js'
          },
          
          projects: {
            title: 'Proyectos',
            project1: {
              title: 'Proyecto 1',
              description: 'Descripción del proyecto'
            },
            project2: {
              title: 'Proyecto 2',
              description: 'Descripción del proyecto'
            }
          },
          
          experience: {
            title: 'Experiencia',
            jobTitle: 'Título del Trabajo',
            companyName: 'Nombre de la Empresa',
            period: '2020 - Presente'
          },
          
          education: {
            title: 'Educación',
            degree: 'Título',
            universityName: 'Nombre de la Universidad',
            period: '2015 - 2019'
          },
          
          contact: {
            title: 'Contacto',
            namePlaceholder: 'Nombre',
            emailPlaceholder: 'Correo Electrónico',
            messagePlaceholder: 'Mensaje',
            sendButton: 'Enviar'
          }
        }
      }
    }
  });

export default i18n;