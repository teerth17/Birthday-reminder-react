import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import List from "./List";
import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";

function App() {
  const [people, setPeople] = useState([]);
  const [images, setImages] = useState([]);
  // const [age, setAge] = useState(0);

  useEffect(() => {
    const storePeople = JSON.parse(localStorage.getItem(people));
    // const storeImage = JSON.parse(localStorage.getItem("images"));
    console.log(storePeople);
    if (storePeople && storePeople.length > 0) {
      setPeople(storePeople);
    }
    // if (storeImage && storeImage.length > 0) {
    //   setImages(storeImage);
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify("people"));
    // localStorage.setItem("images", JSON.stringify(images));
  }, [images, people]);

  //   function addBirthday(name, age, date) {
  //     const newPerson = {
  //       id: people.length + 1,
  //       name: name,
  //       age: age,
  //       daysleft: calculateDaysLeft(date),
  //     };
  //     people.length > 0
  //       ? setPeople([...people, newPerson])
  //       : setPeople(newPerson);
  //     console.log(newPerson);
  //     console.log(people);
  //   }

  function addBirthday(name, age, date) {
    const newPerson = {
      id: people.length + 1,
      name: name,
      age: age,
      image: images,
      daysLeft: calculateDaysLeft(date),
    };

    setPeople([...people, newPerson]); // Add newPerson to the array
    console.log(people);
  }

  const calculateDaysLeft = (birthday) => {
    const today = new Date();
    const birthdayDate = new Date(birthday);
    birthdayDate.setFullYear(today.getFullYear()); // Set the birthday year to the current year
    if (birthdayDate < today) {
      birthdayDate.setFullYear(today.getFullYear() + 1); // Set the birthday year to the next year if it has passed this year
    }
    const timeDifference = birthdayDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  const onChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files);
      // const newImageURL.createObjectURL(e.target.files[0]));
      setImages(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>

        {people.length > 0 ? (
          <>
            <List people={people} />
            <button onClick={() => setPeople([])}>Clear all</button>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                addBirthday(
                  event.target.elements.name.value,
                  event.target.elements.age.value,
                  event.target.elements.date.value
                );
                event.target.elements.name.value = "";
                event.target.elements.age.value = "";
                event.target.elements.date.value = "";
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
              <input
                type="text"
                placeholder="Enter Birthdate"
                name="date"
                defaultValue=""
              />
              <input type="file" name="file" onChange={onChange} />

              <button type="submit"> Add Birthday</button>
            </form>
          </>
        ) : (
          <>
            <h1> No birthday's </h1>
            {console.log("Welcome")}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                addBirthday(
                  event.target.elements.name.value,
                  event.target.elements.age.value,
                  event.target.elements.date.value
                );
                event.target.elements.name.value = "";
                event.target.elements.age.value = "";
                event.target.elements.date.value = "";
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
              <input
                type="text"
                placeholder="Enter Birthdate"
                name="date"
                defaultValue=""
              />

              <input type="file" name="file" onChange={onChange} />
              <button type="submit"> Add Birthday</button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
