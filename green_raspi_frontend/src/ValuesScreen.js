/** @format */
import { Container } from "react-bootstrap";

export const ValueScreen = ({
  vals: { t_pressure, t_humidity, humidity, ph },
}) => {
  return (
    <Container className="app-container">
      <h1>Current Values</h1>
      <div>
        <p>
          <strong>Temp (Pressure)</strong>: {t_pressure}
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
  );
};
