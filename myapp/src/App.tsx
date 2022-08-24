import React from 'react';
import Comp from './Comp';

function App() {

  function sayHello() {
    alert( ' et voilà tout crame !' );
};

  return (
    <div className="App">
      <Comp
      firstName='Kevin'
      lastName='Richard'
      buttonClicked={sayHello}/>
    </div>
  );
}

export default App;
