import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  }
  else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ type: '', msg: '', show: false });
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState('');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit.');

    // key logic to deal with different branches
    if (!name) {
      // display error for empty input
      showAlert(true, 'danger', 'please enter item')
    }
    if (name && isEditing) {
      // deal with editing
      // const editItem = list.find((item) => item.id === editID);
      // editItem.title = name;
      setList( // based on previous state to update current state
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      );
      showAlert(true, 'success', 'item edited');
      setName('');
      setIsEditing(false);
      setEditID('');
    }
    if (name && !isEditing) {
      // add new item to list

      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem]);
      setName('');
      // setAlert({ type: 'success', msg: 'item added', show: true });
      showAlert(true, 'success', 'item added')
    }
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const deleteItem = (key) => {
    const newList = list.filter(({ title, id }) => id !== key);
    setList(newList);
    // setAlert({ type: 'danger', msg: 'item removed', show: true })
    showAlert(true, 'danger', 'item removed')
  }

  const deleteAll = () => {
    setList([]);
    // setAlert({ type: 'danger', msg: 'all items cleared', show: true })
    showAlert(true, 'danger', 'all items cleared')
  }

  const editName = (key) => {
    const specificItem = list.find((item) => item.id === key);
    if (specificItem) {
      setIsEditing(true);
      setEditID(key);
      setName(specificItem.title);
    }
  }

  return (
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}></Alert>}

        <h3>grocery bud</h3>

        <div className="form-control">
          <input
            className="grocery"
            placeholder="e.g. Eggs"
            type="text"
            id="item"
            name="item"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">{isEditing ? "edit" : "submit"}</button>
        </div>

      </form>

      <List list={list} deleteItem={deleteItem} deleteAll={deleteAll} editName={editName}></List>

    </section>
  );
}

export default App
