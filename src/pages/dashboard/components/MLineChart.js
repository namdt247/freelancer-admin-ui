import * as React from "react";
import {Line} from "react-chartjs-2";
// import NoData from "../../../components/NoData";

function MLineChart(props) {
    // const {staffByDepartment} = props;

    const labelLine = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ]

    const chartData = {
        labels: labelLine,
        datasets: [
            {
                label: 'Normal user',
                fill: false,
                data: [0,0,0,0,0,6,100,8,0,0,0,9],
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
            {
                label: 'Freelancer',
                fill: false,
                data: [0,0,0,0,0,2,3,2,0,0,0,0],
                borderColor: '#25b986',
                // lineTension: .4,
                borderDash: [],
                borderWidth: 1,
                pointBorderColor: '#25b986',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1.5,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: '#25b986',
                pointHoverBorderColor: '#25b986',
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                pointHitRadius: 1,
            },
        ]
    };

    const options = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    precision: 0,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Accounts'
                }
            }]
        }
    };

    return (
        <div className="wrap-component-overview-3 mt-3">
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <h6 className="mb-0">User chart</h6>
                    <div className="text-overview-title">
                        User statistics by month
                    </div>
                </div>
            </div>
            {/*<div className="d-flex justify-content-center align-items-center" style={{*/}
            {/*    height: "200px"*/}
            {/*}}>*/}
            {/*    <NoData/>*/}
            {/*</div>*/}
            <Line
                className="staff-line-chart"
                data={chartData}
                options={options}
            />
        </div>
    )
};

export default MLineChart;
