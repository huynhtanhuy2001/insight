import React from "react";
import { Line } from "react-chartjs-2";


const LineChart = () => {
  const data = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    datasets: [
      {
        label: "",
        data: [12, 3, 10, 15],
        borderColor: "orange",
        fill: true,
        // backgroundColor: "linear-gradient(180deg, rgba(250, 160, 95, 0.26) 0%, rgba(255, 255, 255, 0) 141.68%)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };



  return <Line className="linechart" data={data} options={options}  />;
};

export default LineChart;
