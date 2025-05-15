import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AccuracyChart = ({ correct, total}) => {
    const incorrect = total - correct;

    const data = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
            {
                data: [correct, incorrect],
                backgroundColor: ['#10b981', '#ef4444'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                },
            },
        },
    };

    return (
        <div className="p-4">
            <Pie data={data} options={options}/>
        </div>
    );
};

export default AccuracyChart;