const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => {
  const { parts } = props;
  const total = parts.reduce((sum, part) => sum + part.exercises, 0); //2.3

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>total of {total} exrcises</p>
    </div>
  );
};

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

export const Course = (props) => {
  const { course } = props;

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};
