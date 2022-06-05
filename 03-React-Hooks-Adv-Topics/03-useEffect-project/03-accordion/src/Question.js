import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = (props) => {
  const { title, info } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}>
          {isCollapsed ? <AiOutlinePlus></AiOutlinePlus> : <AiOutlineMinus></AiOutlineMinus>}
        </button>
      </header>
      {/* {isCollapsed ? `` : <p>{info}</p>} */}
      {!isCollapsed && <p>{info}</p>}
    </article>
  );
};

export default Question;
