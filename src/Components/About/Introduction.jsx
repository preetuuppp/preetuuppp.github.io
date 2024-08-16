import React from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/112836053?v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Strong in design and integration with intuitive problem-solving
                skills. Proficient in HTML, CSS, JavaScript, React, and Redux
                with 1500+ hours of coding exercises. Passionate about learning
                new technologies as well as launching new projects.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
