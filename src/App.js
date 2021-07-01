import './App.css';
import React from 'react';

//ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//COMPONENTS AND VIEWS
import Header from './components/header/header';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Home from "./views/home/home";
import Tienda from "./views/tienda/tienda";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";


class App extends React.Component {
  render(){
    return (
      <Router>
        <div className='app'>
          <Header/>
          
          <Switch>
            <Route path="/tienda" component={Tienda}/>
            <Route path="/item/:id" component={ItemDetailContainer}></Route>
            <Route path="/" component={Home}/>
          </Switch>

          {/* <ItemListContainer/> */}
        </div>
      </Router>

      
    )
  }
}

export default App;
