import { Component } from '@angular/core';
import { Empleado } from './types/form';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private formService: FormService) { }

  empleado : Empleado={
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    genero: 'o'
  }


  agregarEmpleado(){

    this.formService.addEmpleado(this.empleado);
    this.empleado = {
      id: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: '',
      genero: 'o'
    }
  }

}
