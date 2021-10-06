import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, Text, Tooltip } from "recharts";
import PropTypes from "prop-types";
import "./AverageSession.css";

const AverageSession = ({ sessions }) => {
  const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  /**
   * transforms the numbers of the day by the initials of the corresponding days
   * @returns an array of object were the day value is a capital letter and the sessionLength value is the same as in data
   */

  const formatedDays = () => {
    return sessions.map((session) => ({
      day: days[session.day],
      sessionLength: session.sessionLength,
    }));
  };

  /**
   * Customize the tooltip to display the average time when active
   * @param {boolean} active calculate internally
   * @param {array} payload data array were each object correspond to a Bar, calculated internally
   * @returns a tooltip displaying the data of the line (here minutes)
   */

  const CustomTooltip = ({ active, payload }) => {
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
      <h2 style={{ padding: 10, color: "rgba(255, 255, 255, .5)", fontWeight: 400 }}>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="80%" style={{ padding: 10 }}>
        <LineChart max-width={300} max-height={100} data={formatedDays()}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickSize="0"
            tick={{ color: "white" }}
            style={{ padding: 10, color: "white" }}
          />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            style={{ padding: 10, color: "white" }}
          />
          <Text textAnchor={null}></Text>
          <Tooltip cursor={false} content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
      {/* color: "rgba(255, 255, 255, .5)" */}
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
