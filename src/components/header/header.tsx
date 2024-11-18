import { ModeToggle } from "@/components/dark-theme/mode-toggle";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex justify-between px-5 py-5 items-center">
        <a href="/" className="text-2xl font-bold">
          Blog
        </a>
        <nav>
          <ul className="font-normal flex list-none gap-3 text-base">
            <li>
              <NavLink className="text-muted-foreground" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted-foreground" to="about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3 items-center">
          <NavLink
            className="text-white bg-blue-600 py-2 px-4 font-bold text-sm rounded-md text-center hover:bg-blue-700"
            to="login"
          >
            Sign In
          </NavLink>
          <button>Change Lang</button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
