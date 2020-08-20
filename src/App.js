import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import SingleRoom from "./pages/singleRoom/SingleRoom";
import Error from "./pages/Error/Error";
import Rooms from "./pages/rooms/Rooms";
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Hotel app </h1>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:id" component={SingleRoom} />
      <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
