import React from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import MyParagraph from './components/MyParagaph/MyParagaph';

function App() {
  const [showParagraph, setShowParagraph] = React.useState(false);
  const [allToggle, setAllToggle] = React.useState(false);

  const toggleHandler = React.useCallback(() => {
    if (allToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allToggle]);

  const allHandler = () => {
    setAllToggle(true);
  };

  console.log('APP RUNNING...');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <MyParagraph show={showParagraph} />
      <Button onClick={allHandler}>Allow Toggle</Button>
      {allToggle && <Button onClick={toggleHandler}>Toggle Paragraph</Button>}
    </div>
  );
}

export default App;
