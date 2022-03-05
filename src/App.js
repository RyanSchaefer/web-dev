import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import {BrowserRouter, Route} from "react-router-dom";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";

function App() {
  return (
      <BrowserRouter>
              <Route path="/hello" exact={true}><HelloWorld/></Route>
              <Route path={["/", "/labs"]} exact={true}><Labs/></Route>
              <Route path="/tuiter" exact={true}><Tuiter/></Route>
      </BrowserRouter>
  );
}

export default App;
