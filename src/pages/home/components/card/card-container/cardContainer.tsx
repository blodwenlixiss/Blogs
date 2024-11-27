import { PropsWithChildren } from "react";

export const CardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="border-2 rounded-xl p-6 max-w-full">{children}</div>;
};
