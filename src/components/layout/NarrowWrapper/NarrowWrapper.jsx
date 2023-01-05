import React from "react";
import cl from "./NarrowWrapper.module.css"

function NarrowWrapper({children}) {
  return (
    <div className={cl.wrapper}>
      {children}
    </div>
  );
}

export default NarrowWrapper;
