import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./DailyActivity.css";

export default function DailyActivity() {
  const data = [
    {
      day: 1,
      kilogram: 80,
      calories: 240,
    },
    {
      day: 2,
      kilogram: 80,
      calories: 220,
    },
    {
      day: 3,
      kilogram: 81,
      calories: 280,
    },
    {
      day: 4,
      kilogram: 81,
      calories: 290,
    },
    {
      day: 5,
      kilogram: 80,
      calories: 160,
    },
    {
      day: 6,
      kilogram: 78,
      calories: 162,
    },
    {
      day: 7,
      kilogram: 76,
      calories: 390,
    },
  ];

  return (
    <div className="daily_activity_graph">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend align="right" verticalAlign="top" />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
