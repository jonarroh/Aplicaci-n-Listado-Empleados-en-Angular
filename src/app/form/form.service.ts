import { Injectable } from '@angular/core';
import { Empleado } from './types/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  Empleados: Empleado[] = []

  getEmpleados(): Observable<Empleado[]>{
    if(localStorage.getItem('empleados') === null){
      this.Empleados = [];
    }else{
      this.Empleados = JSON.parse(localStorage.getItem('empleados') || '{}');
    }
    return new Observable<Empleado[]>(observer => {
      observer.next(this.Empleados);
    });
  }

  addEmpleado(empleado: Empleado){
    this.Empleados.push(empleado);
    localStorage.setItem('empleados', JSON.stringify(this.Empleados));
  }

  deleteEmpleado(id: number){
    this.Empleados = this.Empleados.filter(empleado => empleado.id !== id);
    localStorage.setItem('empleados', JSON.stringify(this.Empleados));
  }

}
