import React from "react";
import { Doughnut } from "react-chartjs-2";

interface PieChartProps {
  data: any;
  label: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, label }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 30,
    },
    elements: {
    
      arc: {
        borderWidth: 0,
      },
    },
    cutout: "50%",
  };

  return (
    <div style={{ width: "246px", height: "246px", textAlign: "center" }}>
      <label>{label}</label>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
