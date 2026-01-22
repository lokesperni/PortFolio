import React from "react";

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    <div className="content">{children}</div>
  </section>
);

export default Section;
