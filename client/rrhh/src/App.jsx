import { EditarEmpleado } from "./components/EditarEmpleado";
import { ListadoEmpleados } from "./components/ListadoEmpleados";
import { AgregarEmpleado } from "./pages/AgregarEmpleado";
import { Nav } from "./templates/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" Component={ListadoEmpleados} />
          <Route exact path="/agregar" Component={AgregarEmpleado} />
          <Route exact path="/editar/:id" Component={EditarEmpleado} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
