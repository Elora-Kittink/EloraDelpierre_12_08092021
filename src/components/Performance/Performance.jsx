import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./Performance.css";

const Performance = ({ data }) => {
  console.log(data);
  const kinds = data.kind;

  /**
   * description en anglais
   * @param {object} session description du parametre
   * @returns description de ce qui est retourné
   */

  data = data.data.map((entry) => ({
    kind: kinds[entry.kind],
    value: entry.value,
  }));

  return (
    <div className="performance_graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" />
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
    data: PropTypes.arrayOf({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    }),
  }),
};

export default Performance;
