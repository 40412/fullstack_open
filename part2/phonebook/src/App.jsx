import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nameObject = { name: newName, number: newNumber };

    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map((p) => (
        <p key={p.name}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  );
};

export default App;
