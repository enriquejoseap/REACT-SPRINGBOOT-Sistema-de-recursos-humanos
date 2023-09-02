package enriquejoseap.rrhh.service;

import enriquejoseap.rrhh.model.Empleado;
import enriquejoseap.rrhh.repo.EmpleadoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoService implements IEmpleadoService{

    @Autowired
    private EmpleadoRepo empleadoRepo;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepo.findAll();
    }

    @Override
    public Empleado buscarEmpleadoId(Integer idEmpleado) {
        Empleado empleado = empleadoRepo.findById(idEmpleado).orElse(null);
        return empleado;
    }

    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepo.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Empleado empleado) {
        empleadoRepo.delete(empleado);
    }
}
