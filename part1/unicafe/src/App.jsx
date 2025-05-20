import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good + bad * -1) / all}</p>
      <p>positive {good / all} %</p>
    </div>
  );
};

export default App;
