// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import CharactersList from './components/CharacterList.js'; // Importing the component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Rick and Morty Characters App</h1>
      </header>
      <CharactersList /> {/* Rendering the CharactersList component */}
    </div>
  );
}

export default App;