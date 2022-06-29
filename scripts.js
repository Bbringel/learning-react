//Lesson 1

import React from "react";
import ReactDOM from "react-dom";

const yourName = "Bianca Bringel";

ReactDOM.render(
  <div>
    <p className="heading" contentEditable="true" spellcheck="false">
      Created by {yourName}
    </p>
    <p> Copyright &copy; {new Date().getFullYear()}</p>
  </div>,
  document.querySelector("#root")
);

// Images

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">Favourite Foods</h1>
    <div>
      <img
        className="image"
        alt="Ice Cream"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blueberry-icecream-recipe1-1652730148.jpg?crop=1xw:1xh;center,top&resize=640:*"
      />
      <img
        className="image"
        alt="Soup"
        src="https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png"
      />
      <img
        className="image"
        alt="Pizza"
        src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg"
      />
    </div>
  </div>,
  document.querySelector("#root")
);


