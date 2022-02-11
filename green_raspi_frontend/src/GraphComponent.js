/** @format */
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const GraphComponent = ({
  data_points,
  x_label,
  y_label,
  title,
  min,
}) => {
  useEffect(() => {
    console.log({ data_points, x_label, y_label });
  }, [data_points]);

  const data = {
    labels: data_points.map((v) => v[0]),
    datasets: [
      {
        label: y_label,
        data: data_points.map((v) => v[1]),
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: { min },
    },
  };

  return (
    <Container>
      <div className="graph-container">
        <Line datasetIdKey="id" data={data} options={options} />
      </div>
    </Container>
  );
};
