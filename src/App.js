import React from 'react';
import CardList from './CardList';
import { robots } from './robots';

const App = ()=> {
  return (
    <React.StrictMode>
      <CardList robots={robots}/>
    </React.StrictMode>
  );
}

export default App;
