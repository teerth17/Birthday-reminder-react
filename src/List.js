import React from "react";

const List = ({ people }) => {
  return (
    <>
      {console.log(people)}
      {people.map((person) => {
        const { id, name, age, image, daysLeft } = person;
        console.log(daysLeft);
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p> {age} years </p>
              <p> {daysLeft} Days Left</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
