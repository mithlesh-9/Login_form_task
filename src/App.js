import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.scss';

//Importing Pages from Pages Folder
import LoginPage from './pages/login-page/login-page.jsx';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/" component={LoginPage} />
    </Switch>
    </div>
  );
}

export default App;
