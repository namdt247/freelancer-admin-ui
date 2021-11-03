import * as React from "react";
import {Line} from "react-chartjs-2";
import moment from "moment";
import DateHelper from "../../../common/DateHelper";

function MLineChart(props) {
    const {statisticFinancial, type} = props;

    const convertTitle = (list) => {
        let newArr = [];
        list.forEach((item) => {
            newArr.push(item[0] ? moment(item[0]).format(DateHelper.formatFullDay()) : '');
        })
        return newArr;
    }

    const convertData = (list) => {
        let newArr = [];
        list.forEach((item) => {
            newArr.push(item[1]);
        })
        return newArr;
    }

    const chartData = {
        labels: convertTitle(statisticFinancial),
        datasets: [
            {
                label: 'Revenue',
                fill: false,
                data: convertData(statisticFinancial),
                borderColor: '#fd9e38',
                borderWidth: 1,
                // lineTension: .5,
                borderDash: [],
                pointBorderColor: '#fd9e38',
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 1.5,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: '#fd9e38',
                pointHoverBorderColor: '#fd9e38',
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                pointHitRadius: 1,
            },
        ]
    };

    const options = {
        responsive: true,

        indexAxis: 'x',
        scales: {
            y: {
                beginAtZero: true,
                labelString: 'USD',
            }
        },
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true,
        //             precision: 0,
        //         },
        //         scaleLabel: {
        //             display: true,
        //             labelString: 'USD'
        //         }
        //     }]
        // }
    };

    return (
        <Line
            className={`${(type === 1) ? 'bar-chart-2' : 'bar-chart-1'}`}
            data={chartData}
            options={options}
        />
    )
};

export default MLineChart;
