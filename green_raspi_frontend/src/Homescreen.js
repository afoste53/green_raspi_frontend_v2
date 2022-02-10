/** @format */

import { Container } from "react-bootstrap";
import { GraphComponent } from "./GraphComponent.js";
import { ValueScreen } from "./ValuesScreen.js";

const Homescreen = ({ vals }) => {
  return (
    <Container>
      <ValueScreen vals={vals} />
      <Container className="graphs-container">
        <GraphComponent
          data_points={vals.t_pressure}
          x_label={"time"}
          y_label={"Temp (Degrees C)"}
          title={"Temp (p*C) Over Time"}
        />
        <GraphComponent
          data_points={vals.t_humidity}
          x_label={"time"}
          y_label={"Temp (Degrees C)"}
          title={"Temp (h*C) Over Time"}
        />
        <GraphComponent
          data_points={vals.humidity}
          x_label={"time"}
          y_label={"RH"}
          title={"Relative Humidity Over Time"}
        />
        <GraphComponent
          data_points={vals.ph}
          x_label={"time"}
          y_label={"Ph"}
          title={"Ph Over Time"}
        />
      </Container>
      <div>
        <br></br>
      </div>
    </Container>
  );
};

export default Homescreen;
