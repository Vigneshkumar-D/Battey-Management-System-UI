import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import RetrieveBattery from './components/RetrieveBattery'
import SpecificInfo from './components/SpecificInfo';
import TimeSpecificInfo from './components/TimeSpecificInfo';
import Averages from './components/Averages';
import './App.css';
// import SideBar from './components/SideBar';

function App() {
  return (
  
   <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/retrieve-battery" component={RetrieveBattery} />
          <Route exact path="/specific-info" component={SpecificInfo} />
          <Route exact path="/time-specific-info" component={TimeSpecificInfo} />
          <Route exact path="/averages" component={Averages} />
      </Switch>
  </BrowserRouter>
      

  );
}

export default App;
