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
            <h2>{t("home.title")}</h2>
            <p>{t("home.welcome")}</p>
          </div>

          <div className="section">
            <h2>{t("about.title")}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>

          <div className="section">
            <h2>{t("skills.title")}</h2>
            <ul>
              <li>{t("skills.javascript")}</li>
              <li>{t("skills.react")}</li>
              <li>{t("skills.nodejs")}</li>
            </ul>
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
          </div>

          <div className="section">
            <h2>{t("experience.title")}</h2>
            <div className="experience-item">
              <h3>{t("experience.jobTitle")}</h3>
              <p>{t("experience.companyName")}</p>
              <p>{t("experience.period")}</p>
            </div>
          </div>

          <div className="section">
            <h2>{t("education.title")}</h2>
            <div className="education-item">
              <h3>{t("education.degree")}</h3>
              <p>{t("education.universityName")}</p>
              <p>{t("education.period")}</p>
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
