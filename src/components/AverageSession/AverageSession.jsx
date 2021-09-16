import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text } from "recharts";
import "./AverageSession.css";

const AverageSession = (props) => {
  return (
    <div className="average_session_graph">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={props.data}>
          <XAxis dataKey="day" axisLine={false} tickSize="0" />
          <Line type="basis" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Text textAnchor={null}></Text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSession;
