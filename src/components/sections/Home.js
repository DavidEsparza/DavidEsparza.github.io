import { useTranslation } from "react-i18next";
import resumeEnglishPDF from "../../assets/Resume David Fernando Esparza Esparza English.pdf";
import resumeSpanishPDF from "../../assets/Resume David Fernando Esparza Esparza Spanish.pdf";

function Home() {
  const { t, i18n } = useTranslation();
  
  // Get the current resume based on language
  const currentResume = i18n.resolvedLanguage === 'es' ? resumeSpanishPDF : resumeEnglishPDF;
  const currentResumeFilename = i18n.resolvedLanguage === 'es' 
    ? "Resume_David_Fernando_Esparza_Esparza_Spanish.pdf" 
    : "Resume_David_Fernando_Esparza_Esparza_English.pdf";

  return (
    <div className="section home-section">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-header-content">
            <div className="profile-info">
              <h1>{t("home.title")}</h1>
              <h3>{t("home.subtitle")}</h3>
            </div>
            <div className="profile-buttons">
              <a
                href="https://github.com/DavidEsparza"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-btn"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>{t("home.myGithub")}</span>
              </a>
              <a
                href="mailto:David.Fernando.Esp@gmail.com"
                className="profile-btn"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{t("home.contactMe")}</span>
              </a>
              <a
                href={currentResume}
                download={currentResumeFilename}
                className="profile-btn"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <span>{t("home.seeResume")}</span>
              </a>
            </div>
          </div>
          <p className="contact-info">
            {t("home.phone")} | {t("home.email")} | {t("home.location")}
          </p>
        </div>
        <p className="welcome-text">{t("home.welcome")}</p>
      </div>
    </div>
  );
}

export default Home;
