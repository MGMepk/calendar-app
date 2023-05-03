import "./App.css";
import {React, ReactDOM} from 'react';
import {BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import HomeViewModel from "./viewmodels/HomeViewModel";
import NewObjectiveViewModel from "./viewmodels/NewObjectiveViewModel";
import Home from "./views/Home";
import NewObjective from "./views/NewObjetive";
import EditObjective from "./views/EditObjetive";
import ShowObjective from "./views/ShowObjetive";
import DeleteObjective from "./views/DeleteObjective";
import NoMatch from "./views/NoMatch";

function App() {
  const { date, festivos } = HomeViewModel();
  const { time, handleTimeChange } = NewObjectiveViewModel();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home date={date} festivos={festivos} />} />
        <Route
          path="/new-objective"
          element={
            <NewObjective time={time} handleTimeChange={handleTimeChange} />
          }
        />
        <Route path="/edit-objective/:id" element={<EditObjective />} />
        <Route path="/delete-objective/:id" element={<DeleteObjective />} />
        <Route path="/show-objective/:id" element={<ShowObjective />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-objective">new-objective</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


export default App;