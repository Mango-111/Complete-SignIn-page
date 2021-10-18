import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sign from './components/Sign'
import Dashboard from './components/Dashboard'
import Change from './components/Change'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Sign}/>
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/Change" exact component={Change} />
          <Route path="/Sign" exact component={Sign} />
        </Switch>
      </Router>
  );
}

export default App;
