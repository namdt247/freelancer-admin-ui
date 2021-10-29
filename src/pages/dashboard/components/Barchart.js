import * as React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';

function Barchart(props) {

    const {staffByDepartment} = props;

    const convertData = (list) => {
        let newList = [];
        list.forEach(item => {
            if (item.tongCanBoTheoPhongBan > 0) {
                let obj = {
                    name: item.tenPhongBan || '',
                    Nam: item.tongCanBoTheoPhongBan || 0,
                    Nữ: 0,
                    amt: item.tongCanBoTheoPhongBan || 0,
                }
                newList.push(obj);
            }
        })

        return newList;
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={convertData(staffByDepartment)}
                margin={{
                    top: 20,
                    right: 10,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Nam" barSize={30} stackId="a" fill="#5984EE" />
                <Bar dataKey="Nữ" barSize={30} stackId="a" fill="#45CD93" />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default Barchart;
