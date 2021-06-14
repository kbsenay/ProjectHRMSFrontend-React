import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import SearchBar from './layouts/SearchBar';
import SideBar from './layouts/SideBar';
import 'semantic-ui-css/semantic.min.css'
import {Container} from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
     <Navi/>
     <SearchBar/>
     <Container className="main">
     
     <SideBar/>
     <Dashboard/> 
     </Container>
     
     
    </div>
  );
}

export default App;
