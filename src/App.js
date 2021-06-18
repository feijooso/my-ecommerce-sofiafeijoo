import './App.css';
import React from 'react';

//COMPONENTS
import Header from './components/header/header';

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <Header />
        <h2>Coming soon...</h2>
      </div>
      
    )
  }
}

export default App;
