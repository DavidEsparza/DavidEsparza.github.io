import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { key: 'home', label: t('navbar.home') },
    { key: 'skills', label: t('navbar.skills') },
    { key: 'projects', label: t('navbar.projects') },
    { key: 'experience', label: t('navbar.experience') },
    { key: 'education', label: t('navbar.education') },
    { key: 'contact', label: t('navbar.contact') },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.key}>
                <button
                  onClick={() => scrollToSection(link.key)}
                  className="footer-link-button"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t('footer.connect')}</h3>
          <div className="footer-socials">
            <a
              href="https://github.com/DavidEsparza"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/davidfesparza/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t('footer.contact')}</h3>
          <div className="footer-contact">
            <a
              href="mailto:David.Fernando.Esp@gmail.com"
              className="footer-contact-item"
            >
              <FaEnvelope />
              <span>David.Fernando.Esp@gmail.com</span>
            </a>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>{t('footer.location')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
        <p className="footer-tech">{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
};

export default Footer;
