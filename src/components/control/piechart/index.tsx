import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  // Dữ liệu biểu đồ
  const data = {
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["blue", "orange"],
      },
    ],
  };

  return (
    <div style={{ width: "246px", height: "246px" }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
