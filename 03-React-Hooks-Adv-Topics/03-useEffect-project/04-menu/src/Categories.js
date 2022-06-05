import React from 'react';
import Menu from './Menu';


const Categories = (props) => {

  const { cates, clickHandler } = props;
  // console.log(cates);

  return (
    <div className="btn-container">
      {
        cates.map((cate, idx) => {
          // return <button key={idx} type="button" className="filter-btn" onClick={clickHandler}>{cate}</button>
          return <button key={idx} type="button" className="filter-btn" onClick={() => clickHandler(cate)}>{cate}</button>
        })
      }
    </div>

  );
};

export default Categories;
