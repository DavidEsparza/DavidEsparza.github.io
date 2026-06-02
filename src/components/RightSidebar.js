import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function RightSidebar() {
  const { t } = useTranslation();
  
  // Get CSS variable for link hover color
  const linkHoverColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--link-hover-color').trim() || '#007bff';
  
  const links = [
    { href: "#home", textKey: "sidebar.home" },
    { href: "#about", textKey: "sidebar.about" },
    { href: "#skills", textKey: "sidebar.skills" },
    { href: "#projects", textKey: "sidebar.projects" },
    { href: "#experience", textKey: "sidebar.experience" },
    { href: "#education", textKey: "sidebar.education" },
    { href: "#contact", textKey: "sidebar.contact" },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  // Individual item animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.aside
      className="right-sidebar"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('sidebar.title')}
      </motion.h3>

      <motion.ul className="sidebar-nav" variants={containerVariants}>
        {links.map((link, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              x: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a href={link.href} whileHover={{ color: linkHoverColor }}>
              {t(link.textKey)}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
}

export default RightSidebar;
