package enriquejoseap.rrhh.service;

import enriquejoseap.rrhh.model.Empleado;

import java.util.List;

public interface IEmpleadoService {
    public List<Empleado> listarEmpleados();

    public Empleado buscarEmpleadoId(Integer idEmpleado);

    public Empleado guardarEmpleado(Empleado empleado);

    public void eliminarEmpleado(Empleado empleado);
}
