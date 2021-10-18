import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sign from './components/Sign'
import Dashboard from './components/Dashboard'
import Change from './components/Change'

function App() {
  return (
      <Router>
        <Sign/>
        {/* <Change/> */}
        <Switch>
          <Route path="/" exact Component={Sign}/>
          <Route path="/Dashboard" exact component={Dashboard} />
          {/* <Route path="/Change" exact Component={Change}/> */}
        </Switch>
      </Router>
  );
}

export default App;
