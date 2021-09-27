import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./DailyActivity.css";

export default function DailyActivity({ data }) {
  /**
   * transforms the date of the format yyyy-mm-dd into the number of the day
   * @param {object} session contains the day, kilograms and calories
   * @returns returns a number corresponding to the day of the month
   */

  const getDay = (session) => {
    const convertedDate = session.day.split("-");

    return parseInt(convertedDate[2], 10);
  };

  /**
   * description en anglais
   * @param {boolean} sactive description du parametre
   * @param {array} payload description du parametre
   * @returns description de ce qui est retourné
   */

  const CustomTooltip = ({ active, payload }) => {
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
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};
