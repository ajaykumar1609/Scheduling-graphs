import React, { useState } from "react";

const DateSelector = ({ data, onDateSelected }) => {
  const dates = [...new Set(data.map((item) => item.item_date))];

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    onDateSelected(selectedDate);
  };

  return (
    <div>
      <label htmlFor="date-select" className="select-date">Select a date:</label>
      <select id="date-select" onChange={handleDateChange}>
        <option value="" style={{color: "brown"}}>All dates</option>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
