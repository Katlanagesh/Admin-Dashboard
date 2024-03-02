import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Direct ", "Social ", "Referral"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 35, 15],
      backgroundColor: [
        "rgb(255, 26, 26)",
        "rgb(0, 0, 255)",
        "rgb(255, 204, 0)",
      ],
      borderColor: ["crimson", "blue", "yellow"],
      borderWidth: 3,
    },
  ],
};
function DoughnutChart() {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}

export default DoughnutChart;