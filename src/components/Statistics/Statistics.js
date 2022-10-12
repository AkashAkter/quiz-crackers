import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const chart = useLoaderData();
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <div>
                    <h1 className='stats-header'>Quiz Charts</h1>
                    <div className='chart-container'>
                        <LineChart width={400} height={300} data={chart.data}>
                            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip></Tooltip>
                        </LineChart>
                    </div>
                </div>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;