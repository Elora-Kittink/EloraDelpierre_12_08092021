import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./DailyActivity.css";

export default function DailyActivity({ data }) {
  console.log(data);

  /**
   * description en anglais
   * @param {object} session description du parametre
   * @returns description de ce qui est retourné
   */

  const getDay = (session) => {
    const convertedDate = session.day.split("-");

    return parseInt(convertedDate[2], 10);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="intro">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="daily_activity_graph">
      <h2>Activité quotidienne</h2>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          /*data={data}*/
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={getDay} />
          <YAxis orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend align="right" verticalAlign="top" />
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />
          <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={7} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DailyActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};
