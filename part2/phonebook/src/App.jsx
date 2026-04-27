import { Filter } from "./filter";
import { AddForm } from "./addForm";
import { People } from "./people";
import { useState, useEffect } from "react";
import {
  getPeople,
  updatePerson,
  deletePerson,
  savePerson,
} from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      const people = await getPeople();
      setPersons(people);
    };
    fetchPeople();
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => setFilter(event.target.value);

  const addPerson = async (event) => {
    event.preventDefault();

    if (persons.some((p) => p.name === newName)) {
      const person = persons.find((p) => p.name === newName);
      handleUpdate(person.id);
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    try {
      const saved = await savePerson(nameObject);
      setPersons(persons.concat(saved));
      setNewName("");
      setNewNumber("");
    } catch (err) {
      console.error("Failed to save");
    }
  };

  const handleUpdate = async (id) => {
    const person = persons.find((p) => p.id === id);
    const updated = { ...person, number: newNumber };

    try {
      await updatePerson(id, updated);
      const people = await getPeople();
      setPersons(people);
    } catch (err) {
      console.error("Failed to update");
    }
  };

  const handleDelete = async (id) => {
    const person = persons.find((p) => p.id === id);
    const ok = window.confirm(`Delete ${person.name}?`);

    if (!ok) return;

    try {
      await deletePerson(id);
      const people = await getPeople();
      setPersons(people);
    } catch (err) {
      console.error("Failed to delete");
    }
  };

  const personsToShow =
    filter.length === 0
      ? persons
      : persons.filter((p) =>
          p.name.toLowerCase().includes(filter.toLowerCase()),
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>

      <AddForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleNameChange={handleNameChange}
      />

      <h2>Numbers</h2>
      <People personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
