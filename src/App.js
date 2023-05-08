import "./App.css";
import Layout from "./views/Layout";
import Home from "./views/Home";
import NewObjective from "./views/NewObjective";
import EditObjective from "./views/EditObjetive";
import ShowObjective from "./views/ShowObjetive";
import DeleteObjective from "./views/DeleteObjective";
import NoMatch from "./views/NoMatch";
import { useRoutes, BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Layout /> },
    { path: "/index", element: <Home /> },
    { path: "/new-objective", element: <NewObjective /> },
    { path: "/edit-objective/:id", element: <EditObjective /> },
    { path: "/delete-objective/:id", element: <DeleteObjective /> },
    { path: "/show-objective/:id", element: <ShowObjective /> },
    { path: "*", element: <NoMatch /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
