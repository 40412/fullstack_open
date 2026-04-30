import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

// GET

// Get all people
export const getPeople = async () => {
  try {
    const people = await axios.get(baseUrl);
    return people.data;
  } catch (err) {
    console.error("Error fetching people", err);
  }
};

// POST

// Save a person
export const savePerson = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson);
    console.log("saved", response.data);
    return response.data;
  } catch (err) {
    console.error("Error saving person", err);
    throw err;
  }
};

// PUT

// update person's number
export const updatePerson = async (id, updatedPerson) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPerson);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// DELETE

// Delete entry from the phonebook
export const deletePerson = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (err) {
    console.error("Error deleting person", err);
    throw err;
  }
};
