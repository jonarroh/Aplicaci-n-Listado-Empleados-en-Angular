import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Empleado } from '../types/form';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent  implements OnInit {

  constructor(private formService: FormService) { }

  
  Empleados: Empleado[] = [];


  ngOnInit(): void {
    this.formService.getEmpleados().subscribe(empleados => {
      this.Empleados = empleados;
    });
  }
  

  deleteEmpleado(id: number){
    this.formService.deleteEmpleado(id);
    this.formService.getEmpleados().subscribe(empleados => {
      this.Empleados = empleados;
    });
  }


}
