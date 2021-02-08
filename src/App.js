import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [input, setInput] = useState();
  const [alarms, setAlarms] = useState([]);

  const d = new Date();

  const [ctime, setCurrent] = useState(`${d}`);

  const handleClick = () => {
    let t = input;
    setAlarms([...alarms, t]);
  };
  useEffect(() => {
    const i = setInterval(() => {
      console.log("a");
      let d = new Date();
      let m = d.getMinutes();
      m = m <= 9 ? "0" + m : m;
      setCurrent(`${d.getHours()}:${m}`);
      alarms.map((a) => {
        if (a === ctime) {
          alert("Turn Off Alarm");
          clearInterval(i);
        }
        return true;
      });
    }, 1000);
  });

  return (
    <div className="App">
      <h1>Alarm App</h1>
      <p>Its {ctime}</p>

      <input
        type="text"
        placeholder="Enter Time eg, 12:10"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>+</button>

      <div>
        {alarms.map((a, i) => (
          <p key={i}>Alarm At {a}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
