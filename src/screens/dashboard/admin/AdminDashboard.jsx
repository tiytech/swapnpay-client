import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

import { AdminOverviewCard } from '../../../components'


const AdminDashboard = () => {
    const data = [
        {
            name: 'Jan',
            // uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            // uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            // uv: 2000,
            pv: 8800,
            amt: 2290,
        },
        {
            name: 'Apr',
            // uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            // uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            // uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Jul',
            // uv: 3490,
            pv: 8300,
            amt: 2100,
        },
        {
            name: 'Aug',
            // uv: 3490,
            pv: 5300,
            amt: 2100,
        },
        {
            name: 'Sep',
            // uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            // uv: 3490,
            pv: 8300,
            amt: 2100,
        },
        {
            name: 'Nov',
            // uv: 3490,
            pv: 5300,
            amt: 2100,
        },
        {
            name: 'Dec',
            // uv: 3490,
            pv: 8300,
            amt: 2100,
        },
    ];


    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className="w-full flex flex-wrap justify-between items-center">
                {[1, 2, 3, 4].map((item, index) => (
                    <AdminOverviewCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>

            <div className="bg-white mt-10">
                <LineChart width={1055} height={400} data={data}>
                    {/* <CartesianGrid strokeDasharray="" /> */}
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </div>
        </div>
    )
}

export default AdminDashboard