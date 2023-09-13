import { useState } from 'react';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();

  const [timeValue, setTimeValue] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTimeValue(time);
  };

  // updates time eery second
  setInterval(updateTime, 1000);

  return (
    <div className="container-fluid text-center">
      <h1>{timeValue}</h1>
      {/* updates time when pressed */}
      <button onClick={updateTime} className="btn">Get Time</button>
    </div>
  );
}

export default App;
