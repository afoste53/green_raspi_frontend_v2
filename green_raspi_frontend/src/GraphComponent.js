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

export const GraphComponent = ({ x, y, scale = 1 }) => {
  return (
    <div className="graph-container">
      <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </div>
  );
};
