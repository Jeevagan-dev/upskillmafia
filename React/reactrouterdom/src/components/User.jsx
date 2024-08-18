// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useContext } from 'react'



// export default function User() {
//     const data = useParams()
//   return (
//     <div className='w-100 h-60 bg-blue-900 text-white text-center'>
//           <h1>User: {data.username}</h1>
//     </div>
//   )
// }

import React, { useContext } from 'react';

// Create a Context
const ThemeContext = React.createContext('light');

function User() {
  const theme = 'dark';

  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // Access the current theme using useContext
  const theme = useContext(ThemeContext);

  return <button style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>
    I am styled by theme context!
  </button>;
}

export default User;
