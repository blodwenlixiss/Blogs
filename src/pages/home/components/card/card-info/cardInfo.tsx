export const CardInfo = () => {
  const date = new Date();
  const formatDate = date.toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="text-white">
      <h2 className="text-5xl mb-5 font-bold">Title</h2>
      <ul className="flex gap-4 text-slate-500">
        <li>
          <span>Luka G</span>
        </li>
        <li>
          <p>{formatDate}</p>
        </li>
      </ul>
      <p className="py-4 text-slate-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        laboriosam nesciunt, sed consequatur reprehenderit ratione vero, libero
        incidunt nam tempora reiciendis vitae! Possimus excepturi minima nemo
        quaerat exercitationem. Error, commodi.
      </p>
    </div>
  );
};
