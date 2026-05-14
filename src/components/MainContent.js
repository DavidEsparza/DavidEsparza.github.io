import { useTranslation } from "react-i18next";
import ReactFullpage from "@fullpage/react-fullpage";
import Chatter from "./Chatter";

function MainContent() {
  const { t } = useTranslation();

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation
      navigationPosition="right"
      showActiveTooltip
      navigationTooltips={[
        t("sidebar.home"),
        t("sidebar.about"),
        t("sidebar.skills"),
        t("sidebar.projects"),
        t("sidebar.experience"),
        t("sidebar.education"),
        "Chat",
        t("sidebar.contact"),
      ]}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <h1>{t("home.title")}</h1>
            <h3>{t("home.subtitle")}</h3>
            <p className="contact-info">
              {t("home.phone")} | {t("home.email")} | {t("home.location")}
            </p>
            <p className="welcome-text">{t("home.welcome")}</p>
          </div>

          <div className="section">
            <h2>{t("about.title")}</h2>
            <p>{t("about.description")}</p>
          </div>

          <div className="section">
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

          <div className="section">
            <h2>{t("projects.title")}</h2>
            <div className="project-item">
              <h3>{t("projects.project1.title")}</h3>
              <p>{t("projects.project1.description")}</p>
            </div>
            <div className="project-item">
              <h3>{t("projects.project2.title")}</h3>
              <p>{t("projects.project2.description")}</p>
            </div>
            <div className="project-item">
              <h3>{t("projects.project3.title")}</h3>
              <p>{t("projects.project3.description")}</p>
            </div>
          </div>

          <div className="section">
            <h2>{t("experience.title")}</h2>
            <div className="experience-item">
              <h3>{t("experience.job1.title")}</h3>
              <h4>{t("experience.job1.company")} - {t("experience.job1.location")}</h4>
              <p className="period">{t("experience.job1.period")}</p>
              <ul>
                {t("experience.job1.responsibilities", { returnObjects: true }).map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="experience-item">
              <h3>{t("experience.job2.title")}</h3>
              <h4>{t("experience.job2.company")} - {t("experience.job2.location")}</h4>
              <p className="period">{t("experience.job2.period")}</p>
              <ul>
                {t("experience.job2.responsibilities", { returnObjects: true }).map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="experience-item">
              <h3>{t("experience.job3.title")}</h3>
              <h4>{t("experience.job3.company")} - {t("experience.job3.location")}</h4>
              <p className="period">{t("experience.job3.period")}</p>
              <ul>
                {t("experience.job3.responsibilities", { returnObjects: true }).map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section">
            <h2>{t("education.title")}</h2>
            <div className="education-item">
              <h3>{t("education.degree1.title")}</h3>
              <h4>{t("education.degree1.institution")}</h4>
              <p className="period">{t("education.degree1.period")}</p>
            </div>
            <div className="education-item">
              <h3>{t("education.degree2.title")}</h3>
              <h4>{t("education.degree2.institution")}</h4>
              <p className="period">{t("education.degree2.period")}</p>
            </div>
          </div>

          <div className="section">
            <Chatter />
          </div>

          <div className="section">
            <h2>{t("contact.title")}</h2>
            <form>
              <input type="text" placeholder={t("contact.namePlaceholder")} />
              <input type="email" placeholder={t("contact.emailPlaceholder")} />
              <textarea
                placeholder={t("contact.messagePlaceholder")}
              ></textarea>
              <button type="submit">{t("contact.sendButton")}</button>
            </form>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default MainContent;
