import { Route, Switch } from 'react-router-dom';
import {Link } from 'react-router-dom';
import './App.css';
import ApiData from "./component/ApiData";
import UpDown from "./component/UpDown";
import Todo from "./component/Todo";
import Error from "./pages/Error"
import Navbar from "./component/Navbar";
import Pagination from "./component/pagination/Pagination"

function App() {
 
  return (
<>
    
<Navbar />
<Switch>
< Route exact path="/" component={ApiData} />
< Route exact path="/updown" component={UpDown} />
< Route exact path="/todo" component={Todo} />
<Route exact path = "/pagination" component = {Pagination}/>
< Route  path="/*" component={Error} />
</Switch>

</>
  )
  }

export default App;
