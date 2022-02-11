/** @format */
import { Container } from "react-bootstrap";

export const ValuesComponent = ({ vals }) => {
  const { t_pressure, t_humidity, humidity, ph } = vals;

  return (
    <Container className="d-flex flex-column" id="outer-container">
      <Container className="values-container">
        <h1>Current Values</h1>
        <div>
          <p>
            <strong>Temp (Pressure)</strong>:{" "}
            {t_pressure &&
              t_pressure?.at(-1) &&
              JSON.stringify(t_pressure.at(-1)[1])}
          </p>
          <p>
            <strong>Temp (Humidity)</strong>:{" "}
            {t_humidity &&
              t_humidity?.at(-1) &&
              JSON.stringify(t_humidity.at(-1)[1])}
          </p>
          <p>
            <strong>Humidity</strong>:{" "}
            {humidity && humidity?.at(-1) && JSON.stringify(humidity.at(-1)[1])}
          </p>
          <p>
            <strong>Ph</strong>: {ph[0] && JSON.stringify(ph[6].val)}
          </p>
        </div>
      </Container>
    </Container>
  );
};
