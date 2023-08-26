import React from "react";

interface Props {
  children: React.ReactNode;
}

const MasterLayout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};