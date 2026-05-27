import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="section home-section">
      <div className="profile-card">
        <h1>{t("home.title")}</h1>
        <h3>{t("home.subtitle")}</h3>
        <p className="contact-info">
          {t("home.phone")} | {t("home.email")} | {t("home.location")}
        </p>
        <p className="welcome-text">{t("home.welcome")}</p>
      </div>
    </div>
  );
}

export default Home;
