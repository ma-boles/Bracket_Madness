import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function BarChart({ labels, data }) {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Points per Round',
                data,
                backgroundColor: '#60a5fa',
                borderRadius: 6,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    color: '#fff',
                },
                grid: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            x: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                },
            },
        },
    };

    return (
        <div className="p-4">
            <Bar data={chartData} options={options}/>
        </div>
    );
}
