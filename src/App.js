import React from 'react'
import './App.css';
import ComponentC from './ReactHook/componentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'iVision'}>
        <ChannelContext.Provider value={ 'Web Studion'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
