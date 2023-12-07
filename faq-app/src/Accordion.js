import React from "react";

export default function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>CLICK ME</span>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repudiandae perspiciatis minus dolores aperiam voluptates aliquid
            neque molestias nemo atque, odio eligendi harum laborum quam qui
            incidunt porro, assumenda cum.
          </p>
        </div>
      </div>
    </div>
  );
}
