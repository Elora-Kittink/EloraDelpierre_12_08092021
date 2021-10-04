import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, Text, Tooltip } from "recharts";
import PropTypes from "prop-types";
import "./AverageSession.css";

const AverageSession = ({ data }) => {
  const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  /**
   * transforms the numbers of the day by the initials of the corresponding days
   * @returns an array of object were the day value is a capital letter and the sessionLength value is the same as in data
   */

  const formatedDays = () => {
    return data.map((entry) => ({
      day: days[entry.day],
      sessionLength: entry.sessionLength,
    }));
  };

  const CustomTooltip = ({ active, payload }) => {
    console.log(payload);
    if (active) {
      return (
        <div style={{ backgroundColor: "white", color: "black", padding: "1px" }}>
          <p>{`${payload[0].payload.sessionLength} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="average_session_graph">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart width={300} height={100} data={formatedDays()}>
          <XAxis dataKey="day" axisLine={false} tickSize="0" />
          <Line type="basis" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
          <Text textAnchor={null}></Text>
          <Tooltip cursor={false} content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSession.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};

export default AverageSession;
