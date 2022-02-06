/** @format */
import { Container } from "react-bootstrap";
import { GraphComponent } from "./GraphComponent";

export const ValueScreen = ({
  vals: { t_pressure, t_humidity, humidity, ph },
}) => {
  return (
    <Container className="d-flex flex-column" id="outer-container">
      <Container className="app-container">
        <h1>Current Values</h1>
        <div>
          <p>
            <strong>Temp (Pressure)</strong>: {t_pressure[9]}
          </p>
          <p>
            <strong>Temp (Humidity)</strong>: {t_humidity}
          </p>
          <p>
            <strong>Humidity</strong>: {humidity}
          </p>
          <p>
            <strong>Ph</strong>: {ph}
          </p>
        </div>
      </Container>
      <Container className="app-container">
        <GraphComponent x={"time"} y={"hello"} />
      </Container>
    </Container>
  );
};
