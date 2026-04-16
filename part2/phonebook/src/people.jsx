export const People = (props) => {
  const { personsToShow } = props;
  return (
    <>
      {personsToShow.map((p) => (
        <p key={p.name}>
          {p.name} {p.number}
        </p>
      ))}
    </>
  );
};
