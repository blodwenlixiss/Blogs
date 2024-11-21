import React, { PropsWithChildren } from "react";

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className="px-5 h-max">{children}</main>;
};
