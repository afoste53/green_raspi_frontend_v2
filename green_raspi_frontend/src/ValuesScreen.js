/** @format */
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export const ValueScreen = ({ vals }) => {
  const { t_pressure, t_humidity, humidity, ph } = vals;

  useEffect(() => {}, [t_pressure]);

  return (
    <Container className="d-flex flex-column" id="outer-container">
      <Container className="app-container">
        <h1>Current Values</h1>
        <div>
          <p>
            <strong>Temp (Pressure)</strong>:{" "}
            {t_pressure[0] && JSON.stringify(t_pressure[6].val)}
          </p>
          <p>
            <strong>Temp (Humidity)</strong>:{" "}
            {t_humidity[0] && JSON.stringify(t_humidity[6].val)}
          </p>
          <p>
            <strong>Humidity</strong>:{" "}
            {humidity[0] && JSON.stringify(humidity[6].val)}
          </p>
          <p>
            <strong>Ph</strong>: {ph[0] && JSON.stringify(ph[6].val)}
          </p>
        </div>
      </Container>
    </Container>
  );
};
