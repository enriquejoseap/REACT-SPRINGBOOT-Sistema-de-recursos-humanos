import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditarEmpleado = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  let irInicio = useNavigate();
  const url = "http://localhost:8080/rrhh-app/empleados";
  const { id } = useParams();

  useEffect(() => {
    cargarEmpleado();
  }, []);

  const cargarEmpleado = async () => {
    const res = await axios.get(`${url}/${id}`);
    setFormulario(res.data);
  };

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${url}/${id}`, formulario);
    irInicio("/");
  };

  return (
    <div className="container">
      <div className="container text-center m-2">
        <h3>Editar empleado</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required
            value={formulario.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            required
            value={formulario.departamento}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">
            Sueldo
          </label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="sueldo"
            name="sueldo"
            required
            value={formulario.sueldo}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">
            Guardar
          </button>
          <Link className="btn btn-danger btn-sm" to="/">
            Regresar
          </Link>
        </div>
      </form>
    </div>
  );
};
