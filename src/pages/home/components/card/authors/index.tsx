import { NavLink } from "react-router-dom";

export const Authors = () => {
  return (
    <div className="border-2 h-max p-5 rounded-md ">
      <span className="font-bold">Featured Authors</span>
      <ul className="flex flex-col gap-3 mt-5">
        <li>
          <NavLink to="">name</NavLink>
        </li>
        <li>
          <NavLink to="">name</NavLink>
        </li>
        <li>
          <NavLink to="">name</NavLink>
        </li>
      </ul>
    </div>
  );
};
