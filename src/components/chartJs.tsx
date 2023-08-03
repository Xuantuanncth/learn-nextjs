import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement,PointElement,LineElement, Title,Tooltip,Legend,} from "chart.js";
import { Bar,Line } from "react-chartjs-2";

ChartJS.register( CategoryScale, LinearScale, BarElement,PointElement,LineElement, Title, Tooltip, Legend);

const Chart = ({ data, type }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Data Source",
            },
        },
    };

    if(type === "Line"){
        return <Line data={data} options={options}/>;
    } else {
        return <Bar data={data} options={options} />;
    }
};

export default Chart;
