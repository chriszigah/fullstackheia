import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { coding, momo, mobilemoney, summercamp, admission } from "../images";

const Carousela = () => {
  return (
    <Carousel>
      <div>
        <img src={admission} alt="admission" />
      </div>
      <div>
        <img src={momo} alt="momo" />
      </div>
      <div>
        <img src={coding} alt="coding" />
      </div>
      <div>
        <img src={mobilemoney} alt="mobilemoney" />
      </div>
      <div>
        <img src={summercamp} alt="summercamp" />
      </div>
    </Carousel>
  );
};

export default Carousela;
