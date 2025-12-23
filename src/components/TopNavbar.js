import { motion } from "motion/react";
import { slideFromRight } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../utils/theme";

function TopNavbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  
  const lngs = {
    en: { nativeName: t('navbar.english') },
    es: { nativeName: t('navbar.spanish') },
  };

  return (
    <motion.nav
      className="top-navbar"
      initial="hidden"
      animate="visible"
      variants={slideFromRight}
    >
      <div className="logo">
        <h1>David Fernando Esparza Esparza</h1>
      </div>
      <div className="navbar-controls">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title="Change theme"
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
        <select
          className="language-select"
          value={i18n.resolvedLanguage}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng}>
              {lngs[lng].nativeName}
            </option>
          ))}
        </select>
      </div>
    </motion.nav>
  );
}

export default TopNavbar;
