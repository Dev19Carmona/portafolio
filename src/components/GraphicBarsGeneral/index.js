import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var porcentajes = [80, 90, 70, 50];
var meses = ["Javascript", "Html", "CSS", "C#"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 100
        },
        x: {
            ticks: { color: '#FFDA70'}
        }
    }
};

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Porcentaje',
            data: porcentajes,
            backgroundColor: '#05EB64'
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}
