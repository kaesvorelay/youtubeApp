import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IPropsChart } from "../../types/typesState";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar = (props: IPropsChart) => {
  const options = {
    layout: {
      padding: 50,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = ["view", "like", "favorite", "comment"];
  console.log(props);
  const data = {
    labels,
    datasets: [
      {
        data: props.items,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(25, 99, 132, 0.5)",
          "rgba(105, 99, 132, 0.5)",
          "rgba(165, 99, 132, 0.5)",
        ],
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartBar;
