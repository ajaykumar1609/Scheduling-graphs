import React, { useState, useEffect } from "react";
import ScheduleGraph from "./scheduleGraph";
import DateSelector from "./DateSelector";
// const jsonData = require('./data2.json');
// const data = JSON.parse(jsonData);
// console.log(data);

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   fetch('/data2.json')
  //     .then(response => response.text())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // }, []);
  
  useEffect(() => {
    fetch("/data2.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return <ScheduleGraph data={data} />;
  }
};

export default App;