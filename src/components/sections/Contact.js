import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
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
  );
}

export default Contact;
