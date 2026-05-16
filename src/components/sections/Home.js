import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <div className="first-section">
        <div className="profile-card">
          <h1>{t("home.title")}</h1>
          <h3>{t("home.subtitle")}</h3>
          <p className="contact-info">
            {t("home.phone")} | {t("home.email")} | {t("home.location")}
          </p>
          <p className="welcome-text">{t("home.welcome")}</p>
        </div>
        <div className="more-information">
          <div className="skills-card">
            <h2>{t("skills.title")}</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>{t("skills.frontEnd.title")}</h3>
                <p>{t("skills.frontEnd.items")}</p>
              </div>
              <div className="skill-category">
                <h3>{t("skills.backEnd.title")}</h3>
                <p>{t("skills.backEnd.items")}</p>
              </div>
              <div className="skill-category">
                <h3>{t("skills.cloud.title")}</h3>
                <p>{t("skills.cloud.items")}</p>
              </div>
              <div className="skill-category">
                <h3>{t("skills.languages.title")}</h3>
                <p>{t("skills.languages.items")}</p>
              </div>
              <div className="skill-category">
                <h3>{t("skills.soft.title")}</h3>
                <p>{t("skills.soft.items")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
