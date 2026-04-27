const DeleteButton = (props) => {
  const { handleDelete } = props;
  return <button onClick={handleDelete}>Delete</button>;
};

export const People = (props) => {
  const { personsToShow, handleDelete } = props;
  return (
    <>
      {personsToShow.map((p) => (
        <p key={p.name}>
          {p.name} {p.number}{" "}
          <DeleteButton handleDelete={() => handleDelete(p.id)} />
        </p>
      ))}
    </>
  );
};
