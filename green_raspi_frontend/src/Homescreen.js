/** @format */

import { Container } from "react-bootstrap";
import { GraphComponent } from "./GraphComponent.js";
import { ValuesComponent } from "./ValuesComponent.js";
import "./App.css";

const Homescreen = ({ vals }) => {
  return (
    <Container>
      <ValuesComponent vals={vals} />
      <Container className="graphs-container">
        <GraphComponent
          data_points={vals.t_pressure}
          y_label={"Temp-Pressure"}
          second_data_set={{
            label: "Temp-Humidity",
            data: vals.t_humidity.map((v) => v[1]),
          }}
          title={"Temp Over Time (Deg C)"}
          min={20}
        />
        <GraphComponent
          data_points={vals.humidity}
          y_label={"RH"}
          title={"Relative Humidity Over Time"}
          min={20}
        />
      </Container>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Homescreen;
