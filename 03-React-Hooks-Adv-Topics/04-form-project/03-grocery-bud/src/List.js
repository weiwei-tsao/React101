import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const List = ({ list, deleteItem, deleteAll, editName }) => {

  console.log(list);

  return (
    <div className="grocery-container">
      {
        list.map(({ title, id }, idx) => {
          return (
            < article className="grocery-item" key={idx}>
              <p className="title">{title}</p>
              <div className="btn-container">
                <button className="edit-btn" onClick={() => editName(id)}> <FaEdit></FaEdit> </button>
                <button className="delete-btn" onClick={() => deleteItem(id)}><FaTrash></FaTrash></button>
              </div>
            </ article>
          );
        })
      }
      {list.length === 0 ? "" : <button className="clear-btn" onClick={deleteAll}>clear items</button>}
    </div>
  );
}

export default List
