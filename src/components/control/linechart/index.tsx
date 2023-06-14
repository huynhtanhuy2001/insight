import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    datasets: [
      {
        label: "none",
        data: [12, 3, 10, 15],
        borderColor: "orange",
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
