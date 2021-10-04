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
  console.log(data);
  /**
   * Customize the tooltip to display the kilograms and calories when active
   * @param {boolean} active calculate internally
   * @param {array} payload data array were each object correspond to a Bar, calculated internally
   * @returns a tooltip displaying the data of both bar (here kilograms and calories)
   */

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div style={{ backgroundColor: "#E60000", color: "white", padding: "5px" }}>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="daily_activity_graph">
      <h2 className="daily_activity_title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={250} margin={{ bottom: 0 }}>
        <BarChart
          barSize={10}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={getDay} tickLine={false} />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            padding={{ left: -15, right: -20 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            align="right"
            verticalAlign="top"
            wrapperStyle={{ top: -30, right: 10 }} /*style={{ position: "absolute", top: 0 }}*/
          />
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
