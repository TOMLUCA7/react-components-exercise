import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  return (
    <div id="ex-2">
      {Array.from({ length: 500 }).map((_, index) => (
        <Spam key={index} />
      ))}
    </div>
  );
};

export default Spamalot;
