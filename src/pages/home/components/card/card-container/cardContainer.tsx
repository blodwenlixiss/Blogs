import { PropsWithChildren } from "react";

export const CardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" border-gray-800 border-2 rounded-xl p-6 w-2/5">
      {children}
    </div>
  );
};
