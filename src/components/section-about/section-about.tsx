import React from "react";
import Counter from "../counter/counter";
import "./section-about.scss";

const SectionAbout: React.FC<{}> = () => {
  return (
    <div className="section about">
      <h1>My name is Stephen</h1>
      <p>And i've been a software engineer for...</p>
      <Counter />
    </div>
  )
}

export default SectionAbout