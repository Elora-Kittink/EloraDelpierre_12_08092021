import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./Performance.css";

const Performance = ({ data }) => {
  /**
   * transform the "kind" value in data.data array into the corresponding value of the data.kind array
   * @param {array} performance array of each performance
   * @returns an array of object were "kind" value is a string and "value" value a number
   */

  data = data.data.map((performance) => ({
    kind: data.kind[performance.kind],
    value: performance.value,
  }));

  return (
    <div className="performance_graph">
      <ResponsiveContainer width="80%" height="80%" style={{ margin: 10 }}>
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tick={{ fill: "#FFFFFF", fontSize: 12 }} tickLine={false} />
          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

Performance.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.shape({
      1: PropTypes.string.isRequired,
      2: PropTypes.string.isRequired,
      3: PropTypes.string.isRequired,
      4: PropTypes.string.isRequired,
      5: PropTypes.string.isRequired,
      6: PropTypes.string.isRequired,
    }),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      })
    ),
  }),
};

export default Performance;
