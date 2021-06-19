import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import SearchBar from './layouts/SearchBar';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navi/>
      
      <Route exact path="/" component={SearchBar} />

      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
