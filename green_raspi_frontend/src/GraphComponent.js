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
  y_label,
  title,
  min,
  second_data_set,
}) => {
  const data = {
    labels: data_points.map((v) => v[0].substr(10, 6)),
    datasets: [
      {
        label: y_label,
        data: data_points.map((v) => v[1]),
      },
    ],
  };

  second_data_set &&
    data.datasets.push({
      label: second_data_set.label,
      data: second_data_set.data,
    });

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
