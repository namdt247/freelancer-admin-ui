import React from 'react';
import {Bar} from 'react-chartjs-2';
import moment from "moment";
import DateHelper from "../../../common/DateHelper";

export default function Barchart(props) {
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
                data: convertData(statisticFinancial),
                backgroundColor:'#25B986',
            },

        ]
    };

    const optionsData = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    callback: function(value) {
                        return value + ' USD';
                    }
                }
            }]
        },
        legend: {
            display: false,
        }
    };

    return (
        <Bar
            data={chartData}
            options={optionsData}
            className={`${(type === 1) ? 'bar-chart-2' : 'bar-chart-1'}`}
        />
    );
}
