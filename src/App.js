import './App.css';
import React from 'react';

//COMPONENTS
import Header from './components/header/header';
import ItemListContainer from './components/itemListContainer/itemListContainer';

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <Header />
        <ItemListContainer greeting={'Bienvenidx!'}/>
      </div>
      
    )
  }
}

export default App;
