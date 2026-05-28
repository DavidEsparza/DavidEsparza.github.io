import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <h2>{t("education.title")}</h2>
      <div className="education-container">
        <div className="education-item-compact">
          <h3>{t("education.degree1.title")}</h3>
          <h4>{t("education.degree1.institution")}</h4>
          <p className="period">{t("education.degree1.period")}</p>
        </div>
        <div className="education-item-compact">
          <h3>{t("education.degree2.title")}</h3>
          <h4>{t("education.degree2.institution")}</h4>
          <p className="period">{t("education.degree2.period")}</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
