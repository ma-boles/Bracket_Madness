import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AccuracyChart = ({ correct, total, usePoolDisplay }) => {
    const backgroundColors = usePoolDisplay 
        ? ['#facc15', '#e2e8f0']
        : ['#6b21a8', '#e9d5ff']; 

    const incorrect = total - correct;

    const data = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
            {
                data: [correct, incorrect],
                backgroundColor: backgroundColors,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                title: {
                display: true,
                text: ' ',
                padding: {
                top: 10,
                bottom: 0,
                },
            },
                labels: {
                    color: '#fff',
                },
            },
        },
    };

    return (
        <div className="w-full max-w-xs sm:max-w-md md:max-w-full mx-auto h-[250px] md:h-[300px] lg:h-[350px] p-4 m-2">

            <div className="relative w-full h-full">
            <Pie
                data={data}
                options={{
                ...options,
                maintainAspectRatio: false,
                }}
            />
            </div>
        </div>
    );
};

export default AccuracyChart;