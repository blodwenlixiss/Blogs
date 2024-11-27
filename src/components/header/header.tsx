import { getProfileInfo } from "@/api/account";
import { ModeToggle } from "@/components/dark-theme/mode-toggle";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [user] = useAtom(userAtom);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (user?.user?.id) {
      getProfileInfo(user.user.id).then((res) => {
        setName(res.data?.[0]?.full_nameEn || null);
      });
    }
  }, [user]);

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
          {user ? (
            <NavLink to="profile">
              <img
                className="w-10 rounded-full bg-blue-50"
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix"
                alt="avatar"
              />
              <span className="text-center">{name}</span>
            </NavLink>
          ) : (
            <NavLink
              className="text-white bg-blue-600 py-2 px-4 font-bold text-sm rounded-md text-center hover:bg-blue-700"
              to="login"
            >
              Sign In
            </NavLink>
          )}
          <button>Change Lang</button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
