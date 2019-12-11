import React, { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState([
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ]);
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  const onChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (person.firstName.trim() === '' || person.lastName.trim() === '') return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    };

    setPeople([...people, newPerson]);
    setPerson({ firstName: '', lastName: '' });
  };
  return (
        <div className="col">
          <h2>People: </h2>
          <hr />
          {people.map((p) => (
            <div key={Math.random() * 1000000000}>
              <p>
                {p.firstName} {p.lastName}
              </p>
            </div>
          ))}
        </div>
  );
};

export default List;