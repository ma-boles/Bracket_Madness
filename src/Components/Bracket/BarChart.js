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

export default function BarChart({ labels, data, usePoolDisplay }) {
    const barColor = usePoolDisplay ? '#facc15' : '#c084fc'; 

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Points per Round',
                data,
                backgroundColor: barColor,
                borderRadius: 6,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
        },
        layout: {
            padding: {
            top: 0,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    color: '#fff',
                    stepSize: 100,
                },
                grid: {
                    color: 'rgba(255,255,255,0.1)',
                },
                suggestedMax: Math.max(...data) + 20,
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
                align: 'end',
                labels: {
                    color: '#fff',
                },
            },
        },
    };


    return (
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full mx-auto h-[250px] sm:h-[300px] md:h-[320px] lg:h-[360px] p-4">
            <Bar data={chartData} options={options} />
        </div>
    );
}
