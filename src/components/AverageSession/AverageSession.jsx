import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text } from "recharts";
import "./AverageSession.css";

const AverageSession = () => {
  const data = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];

  return (
    <div className="average_session_graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <XAxis dataKey="day" axisLine={false} />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Text textAnchor={null}></Text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSession;
