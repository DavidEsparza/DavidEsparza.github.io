import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <h2>{t("experience.title")}</h2>
      <div className="experience-item">
        <h3>{t("experience.job1.title")}</h3>
        <h4>
          {t("experience.job1.company")} - {t("experience.job1.location")}
        </h4>
        <p className="period">{t("experience.job1.period")}</p>
        <ul>
          {t("experience.job1.responsibilities", {
            returnObjects: true,
          }).map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <div className="experience-item">
        <h3>{t("experience.job2.title")}</h3>
        <h4>
          {t("experience.job2.company")} - {t("experience.job2.location")}
        </h4>
        <p className="period">{t("experience.job2.period")}</p>
        <ul>
          {t("experience.job2.responsibilities", {
            returnObjects: true,
          }).map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <div className="experience-item">
        <h3>{t("experience.job3.title")}</h3>
        <h4>
          {t("experience.job3.company")} - {t("experience.job3.location")}
        </h4>
        <p className="period">{t("experience.job3.period")}</p>
        <ul>
          {t("experience.job3.responsibilities", {
            returnObjects: true,
          }).map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
