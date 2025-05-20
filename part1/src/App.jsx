const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part item={parts[0]} />
      <Part item={parts[1]} />
      <Part item={parts[2]} />
    </div>
  );
};

const Part = ({ item }) => {
  return (
    <p>
      {item.name} {item.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  let total = 0;
  parts.forEach((element) => {
    total += element.exercises;
  });
  return <p>Number of exercises {total} </p>;
};

export default App;
