export const AddForm = (props) => {
  const {
    addPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
  } = props;
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input required value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input required value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
