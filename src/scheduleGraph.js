import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import DateSelector from "./DateSelector";
const ScheduleGraph = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredData = selectedDate
    ? data.filter((item) => item.item_date === selectedDate)
    : data;

  const groupByDate = filteredData.reduce((groups, item) => {
    const date = item.schedule_time.slice(0, 10);
    if (!groups[date]) {
      groups[date] = {
        date,
        count: 0,
        hours: Array.from({ length: 24 }, () => 0),
      };
    }
    groups[date].count++;
    const hour = parseInt(item.schedule_time.slice(11, 13), 10);
    groups[date].hours[hour]++;
    return groups;
  }, {});

  const graphData = Object.values(groupByDate).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleBarClick = (data) => {
    setSelectedDate(data.date);
  };

  const handleDateSelected = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div className="Home">
      <h2>Scheduling Graph</h2>
      <DateSelector data={data} onDateSelected={handleDateSelected} />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BarChart
          width={1200}
          height={500}
          data={graphData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" onClick={handleBarClick} />
        </BarChart>
      </div>
      {selectedDate && groupByDate[selectedDate] && (
        <div>
          <h2>Details for {selectedDate}</h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%", overflowY: "auto", maxHeight:"300px" }}>
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {groupByDate[selectedDate].hours.map((count, index) => (
                    count > 0 ?(
                    <tr key={index}>
                      <td>{`${index}:00 - ${index + 1}:00`}</td>
                      <td>{count}</td>
                    </tr>):null
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleGraph;
