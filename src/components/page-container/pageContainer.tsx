import React, { PropsWithChildren } from "react";

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};
