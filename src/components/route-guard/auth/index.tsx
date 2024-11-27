import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import React, { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [user] = useAtom(userAtom);
  if (user) {
    return <Navigate to="/" />;
  }
  return children || <Outlet />;
};

export const ProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [user] = useAtom(userAtom);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children || <Outlet />;
};
