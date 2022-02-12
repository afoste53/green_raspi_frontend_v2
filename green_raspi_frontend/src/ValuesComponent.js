/** @format */
import { Container, Row, Col } from "react-bootstrap";

export const ValuesComponent = ({ vals }) => {
  const { t_pressure, t_humidity, humidity, ph } = vals;

  return (
    <Container className="d-flex flex-column" id="outer-container">
      <Container className="values-container">
        <Row>
          <Col>
            <strong>Temp (Pressure)</strong>:{" "}
            {t_pressure &&
              t_pressure?.at(-1) &&
              JSON.stringify(t_pressure.at(-1)[1])}
          </Col>
          <Col>
            <strong>Temp (Humidity)</strong>:{" "}
            {t_humidity &&
              t_humidity?.at(-1) &&
              JSON.stringify(t_humidity.at(-1)[1])}
          </Col>
          <Col>
            <strong>Humidity</strong>:{" "}
            {humidity && humidity?.at(-1) && JSON.stringify(humidity.at(-1)[1])}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
