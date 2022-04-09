/** @format */

import { useState } from "react";
import { Container, Form, FormSelect } from "react-bootstrap";
import { GraphComponent } from "./GraphComponent.js";
import { ValuesComponent } from "./ValuesComponent.js";
import "./App.css";

const Homescreen = ({ vals }) => {
  const [formSelectVal, setFormSelectVal] = useState("Last 4 Hours");

  const handleFormSelect = (e) => {
    setFormSelectVal(e.target.value);
  };

  const findLastTime = () => {
    try {
      return ` @ ${vals.t_humidity
        .map((v) => v[0])
        .at(-1)
        .substr(10, 6)}`;
    } catch (err) {
      return ":";
    }
  };

  return (
    <Container>
      <h2 className="mt-5">Currently{findLastTime()}</h2>
      <Container>
        <ValuesComponent vals={vals} />
        <Container>
          <Form className="my-4 mx-5 px-5" onChange={handleFormSelect}>
            <FormSelect defaultValue={formSelectVal}>
              <option>Last Hour</option>
              <option>Last 4 Hours</option>
              <option>Today</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>All Time</option>
            </FormSelect>
          </Form>
        </Container>
        <Container className="graphs-container">
          <GraphComponent
            data_points={vals.t_pressure}
            y_label={"Temp-Pressure"}
            second_data_set={{
              label: "Temp-Humidity",
              data: vals.t_humidity.map((v) => v[1]),
            }}
            title={"Temp Over Time (Deg C)"}
            min={15}
            timeFrame={formSelectVal}
            key={`k1-${formSelectVal}-${vals}`}
          />
          <GraphComponent
            data_points={vals.humidity}
            y_label={"RH"}
            second_data_set={null}
            title={"Relative Humidity Over Time"}
            min={20}
            timeFrame={formSelectVal}
            key={`k2-${formSelectVal}-${vals}`}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Homescreen;
