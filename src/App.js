import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import List from "./List";
import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  function addBirthday(name, age) {
    const newPerson = {
      id: people.length + 1,
      name: name,
      age: age,
    };
    setPeople([...people, newPerson]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addBirthday(
              event.target.elements.name.value,
              event.target.elements.age.value
            );
            event.target.elements.name.value = "";
            event.target.elements.age.value = "";
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            defaultValue=""
          />
          <input
            type="text"
            placeholder="Enter Age"
            name="age"
            defaultValue=""
          />
          <button type="submit"> Add Birthday</button>
        </form>
      </section>
    </main>
  );
}

export default App;
