package enriquejoseap.rrhh.driver;

import enriquejoseap.rrhh.model.Empleado;
import enriquejoseap.rrhh.service.IEmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//http://localhost/rrhh-app/
@RequestMapping("")
@CrossOrigin(value = "http://localhost:8080")
public class EmpleadoDriver {

    @Autowired
    private IEmpleadoService empleadoService;

    // Metodo GET para obtener todas las filas de la base de datos
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados(){
        var empleados = empleadoService.listarEmpleados();
        //empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }

    // Metodo POST para crear una fila nueva en la base de datos
    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        //logger.info("Empleado a agregar: " + empleado);
        return empleadoService.guardarEmpleado(empleado);
    }

    // Metodo para recibir la informacion de la fila de la base de datos para enviarla al cliente a la hora de editar
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoId(@PathVariable Integer id){
        Empleado empleado = empleadoService.buscarEmpleadoId(id);
        return ResponseEntity.ok(empleado);
    }

    // Metodo PUT para actualizar la fila de la base de datos
    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Integer id, @RequestBody Empleado empleadoRecibido){
        Empleado empleado = empleadoService.buscarEmpleadoId(id);
        empleado.setNombre(empleadoRecibido.getNombre());
        empleado.setDepartamento(empleadoRecibido.getDepartamento());
        empleado.setSueldo(empleadoRecibido.getSueldo());
        empleadoService.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleado);

    }

    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Integer id){
        Empleado empleado = empleadoService.buscarEmpleadoId((id));
        empleadoService.eliminarEmpleado(empleado);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);

    }
}
