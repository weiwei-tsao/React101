import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {

  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');

  const fetchData = async () => {

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {

        const { phone, email } = data.results[0];
        const { large: image } = data.results[0].picture;
        const { login: { password } } = data.results[0];
        const { first, last } = data.results[0].name;
        const { dob: { age } } = data.results[0];
        const { street: { number, name } } = data.results[0].location;

        const newPerson = { phone, email, image, password, age, name: `${first} ${last}`, street: `${number} ${name}` };
        setPerson(newPerson);
        setLoading(false);
        setTitle('name');
        setValue(newPerson.name);
      }
      else {
        setPerson(null)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  const handleValue = (event) => {
    // identity the button element
    if (event.target.classList.contains('icon')) {
      // then get the customized label as key to query the value in object
      const newTitle = event.target.dataset.label;
      setTitle(newTitle);
      setValue(person[newTitle]);
    }
  }

  const handleClick = (event) => {
    fetchData();
  }

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img className="user-img" src={(person && person.image) || defaultImage} alt="random user"></img>
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleValue}>
              <FaUser></FaUser>
            </button>
            <button className="icon" data-label="email" onMouseOver={handleValue}>
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes></FaCalendarTimes>
            </button>
            <button className="icon" data-label="street" onMouseOver={handleValue}>
              <FaMap></FaMap>
            </button>
            <button className="icon" data-label="phone" onMouseOver={handleValue}>
              <FaPhone></FaPhone>
            </button>
            <button className="icon" data-label="password" onMouseOver={handleValue}>
              <FaUser></FaUser>
            </button>
          </div>

          <button className="btn" type="button" onClick={handleClick}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App
