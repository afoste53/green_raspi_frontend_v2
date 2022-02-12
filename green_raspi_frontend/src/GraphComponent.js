/** @format */
import "./App.css";
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
import { useEffect, useState } from "react";

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
  timeFrame,
}) => {
  const handleTimeFrame = (dataArr) => {
    switch (timeFrame) {
      case "Last Hour":
        return dataArr.slice(-7, -1);
      case "Last 4 Hours":
        return dataArr.slice(-25, -1);
      case "Today":
        return dataArr.slice(-145, -1);
      case "Last 7 Days":
        return dataArr.slice(-1009, -1);
      case "Last 30 Days":
        return dataArr.slice(-4320, -1);
      default:
        return dataArr;
    }
  };

  const data = {
    labels: handleTimeFrame(data_points.map((v) => v[0].substr(10, 6))),
    datasets: [
      {
        label: y_label,
        data: handleTimeFrame(data_points.map((v) => v[1])),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  second_data_set &&
    data.datasets.push({
      label: second_data_set.label,
      data: handleTimeFrame(second_data_set.data),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
