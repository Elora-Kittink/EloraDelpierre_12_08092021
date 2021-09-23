import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text } from "recharts";
import PropTypes from "prop-types";
import "./AverageSession.css";

const AverageSession = ({ data }) => {
  const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  /**
   * description en anglais
   * @param {object} session description du parametre
   * @returns description de ce qui est retourné
   */

  data = data.map((entry) => ({
    day: days[entry.day],
    sessionLength: entry.sessionLength,
  }));

  return (
    <div className="average_session_graph">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <XAxis dataKey="day" axisLine={false} tickSize="0" />
          <Line type="basis" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Text textAnchor={null}></Text>
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
