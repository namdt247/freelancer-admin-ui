import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import {Tooltip} from "antd";

function MPieChart(props) {
    const {staffByContract} = props;

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#ff8042'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <Tooltip placement="top" title={staffByContract[index]?.tenHopDong || ''}>
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            </Tooltip>
        );
    };

    const convertData = (list) => {
        let newList = [];
        list.forEach(item => {
            let obj = {
                name: item.tenHopDong || '',
                value: item.tongCanBoTheoHopDong ? parseInt(item.tongCanBoTheoHopDong) : 0,
            }
            newList.push(obj);
        })

        return newList;
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart width={'100%'} height={'100%'}>
                <Pie
                    data={convertData(staffByContract)}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {convertData(staffByContract).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
};

export default MPieChart;
