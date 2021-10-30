import { Switch, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Write from "./components/Write";
import Notes from "./components/Notes";

const App = () => {
  const user = true;
  return (
    <div className="main-wrapper">
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{<Login />}</Route>Login
        <Route path="/register">{<Register />}</Route>
        <Route exact path="/dashboard">
          {user ? <Dashboard /> : <Login />}
        </Route>
        <Route path="/dashboard/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/dashboard/notes/:noteId">
          {user ? <Notes /> : <Login />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
