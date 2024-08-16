import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";

import "./Github.css";
export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename} data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <Githubcalendar
          username="preetuuppp"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />
      </div>
      <br />
      <br />
      <div className="gitstates">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=preetuuppp&theme=black-ice&hide_border=false&stroke=0000&background=23283E"
            alt="preeti-stats"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=preetuuppp&show_icons=true&count_private=true&theme=react&hide_border=false&bg_color=23283E"
            alt="preeti-stats"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=preetuuppp&show_icons=true&locale=en&layout=compact&theme=react&hide_border=false&bg_color=23283E"
            alt="preeti-stats"
          />
        </div>
      </div>
    </>
  );
};
