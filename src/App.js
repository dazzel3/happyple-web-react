import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Exhibition from './components/Exhibition';
import Home from './components/Home';
import Shop from './components/Shop';
import FAQ from './components/FAQ';
import TimeSlip from './components/TimeSlip';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About} exact></Route>
      <Route path="/exhibition" component={Exhibition} exact></Route>
      <Route path="/shop" component={Shop} exact></Route>
      <Route path="/FAQ" component={FAQ} exact></Route>
      <Route path="/exhibition-timeslip" component={TimeSlip} exact></Route>
      <Route render= {({location}) => <div>
          <h2> 이 페이지는 존재하지 않습니다.</h2>
          <p>{location.pathname}</p>
        </div>}
      />
    </Switch>
  );
}

export default App;
