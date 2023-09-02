import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ListadoEmpleados = () => {
  const urlBase = "http://localhost:8080/rrhh-app/empleados";
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const json = await axios.get(urlBase);
    // console.log("Empleados: ", json.data);
    setEmpleados(json.data);
  };

  const eliminarEmpleado = async (id) =>{
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  }

  return (
    <div>
      <div className="container tex-center" style={{ margin: "30px" }}>
        <h3>Sistema de Recursos Humanos</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th itemScope="col">#</th>
            <th itemScope="col">Nombre</th>
            <th itemScope="col">Departamento</th>
            <th itemScope="col">Seldo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => {
            return (
              <tr key={empleado.idEmpleado}>
                <th>{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td>${empleado.sueldo}</td>
                <td className="text-center">
                  <div>
                    <Link to={`/editar/${empleado.idEmpleado}`} className="btn btn-warning btn-sm me-3">Editar</Link>
                    <button onClick={() => eliminarEmpleado(empleado.idEmpleado)} className="btn btn-danger btn-sm ">Eliminar</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
