import React from "react";
import cl from "./WideWrapper.module.css";

export default function WideWrapper({ children }) {
  return <div className={cl.wideWrapper}>{children}</div>;
}
