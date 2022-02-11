/** @format */

import { Container } from "react-bootstrap";
import { GraphComponent } from "./GraphComponent.js";
import { ValuesComponent } from "./ValuesComponent.js";

const Homescreen = ({ vals }) => {
  return (
    <Container>
      <ValuesComponent vals={vals} />
      <Container className="graphs-container">
        <GraphComponent
          data_points={vals.t_pressure}
          y_label={"Temp (Degrees C)"}
          title={"Temp (p*C) Over Time"}
          min={20}
        />
        <GraphComponent
          data_points={vals.t_humidity}
          y_label={"Temp (Degrees C)"}
          title={"Temp (h*C) Over Time"}
          min={20}
        />
        <GraphComponent
          data_points={vals.humidity}
          y_label={"RH"}
          title={"Relative Humidity Over Time"}
          min={20}
        />
        {/* <GraphComponent
          data_points={vals.ph}
          x_label={"time"}
          y_label={"Ph"}
          title={"Ph Over Time"}
        /> */}
      </Container>
      <div>
        <br></br>
      </div>
    </Container>
  );
};

export default Homescreen;
