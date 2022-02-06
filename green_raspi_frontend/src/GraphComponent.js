/** @format */
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const GraphComponent = ({ x, y }) => {
  const { x_label, x_vals } = x;
  const { y_label, y_vals } = y;

  return (
    <div className="graph-container">
      <Line
        datasetIdKey="id"
        data={{
          labels: x_vals,
          datasets: [
            {
              id: 1,
              label: "",
              data: y_vals,
            },
          ],
        }}
      />
    </div>
  );
};
