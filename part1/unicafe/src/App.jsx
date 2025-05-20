import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button setter={setGood} title="good" />
      <Button setter={setNeutral} title="neutral" />
      <Button setter={setBad} title="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <>
      <h1>statistics</h1>
      {!all ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={all} />
          <StatisticLine text={"average"} value={(good + bad * -1) / all} />
          <StatisticLine text={"positive"} value={(good / all) * 100 + " %"} />
        </>
      )}
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = (props) => {
  return (
    <button onClick={() => props.setter((prev) => prev + 1)}>
      {props.title}
    </button>
  );
};

export default App;
