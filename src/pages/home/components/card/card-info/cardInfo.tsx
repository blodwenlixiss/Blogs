import { useTranslation } from "react-i18next";

export const CardInfo = ({
  title,
  description,
  creationDate,
}: {
  title: string;
  description: string;
  creationDate: string;
}) => {
  const date = new Date(creationDate);
  const formatDate = date.toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const { t } = useTranslation();

  return (
    <div className="article-container">
      <h2 className="text-5xl mb-5 font-bold">{t(`${title}`)}</h2>
      <ul className="flex gap-4 text-slate-500">
        <li>
          <span>{t("home-page.name")}</span>
        </li>
        <li>
          <p>{formatDate}</p>
        </li>
      </ul>
      <p className="py-4 text-slate-500">{t(`${description}`)}</p>
    </div>
  );
};
