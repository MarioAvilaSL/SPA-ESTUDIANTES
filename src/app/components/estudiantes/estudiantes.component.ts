import { Component, OnInit } from '@angular/core';
import { EstudiantesService, Estudiantes } from '../../services/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiantes[] = [];
  filtroEstudiantes: Estudiantes[] = [];



  ngOnInit(): void {
    this.estudiantes = this._estudiantesService.getEstudiantes();
    this.filtroEstudiantes = this.estudiantes; 
    console.log(this.estudiantes);


    
  }
  constructor(private _estudiantesService: EstudiantesService, private router: Router) {}

  VerEstudiante(idx: number) {
    console.log(idx);
    this.router.navigate(['/estudiante', idx]);
  }

  FiltroT() {
    this.estudiantes = this._estudiantesService.getEstudiantes();
  }

  FiltroB() {
    const estudiantesBasica = this._estudiantesService.getEstudiantesPorAnio('básica');
    if (estudiantesBasica.length > 0) {
      this.estudiantes = estudiantesBasica;
    } else {
      console.log('No hay estudiantes en básica');
      this.estudiantes = [];
    }
  }

  FiltroP() {
    const estudiantesPreparatoria = this._estudiantesService.getEstudiantesPorAnio('preparatoria');
    if (estudiantesPreparatoria.length > 0) {
      this.estudiantes = estudiantesPreparatoria;
    } else {
      console.log('No hay estudiantes en preparatoria');
      this.estudiantes = [];
    }
  }

  FiltroBach() {
    const estudiantesBachillerato = this._estudiantesService.getEstudiantesPorAnio('bachillerato');
    if (estudiantesBachillerato.length > 0) {
      this.estudiantes = estudiantesBachillerato;
    } else {
      console.log('No hay estudiantes en bachillerato');
      this.estudiantes = [];
    }
  }



  FiltroDeudores() {
    const estudiantesDeudores = this._estudiantesService.getEstudiantes().filter(estudiante => estudiante.deuda > 0);
    if (estudiantesDeudores.length > 0) {
      this.estudiantes = estudiantesDeudores;
    } else {
      console.log('No hay estudiantes deudores');
      this.estudiantes = [];
    }
  }
  
  FiltroNoDeudores() {
    const estudiantesNoDeudores = this._estudiantesService.getEstudiantes().filter(estudiante => estudiante.deuda === 0);
    if (estudiantesNoDeudores.length > 0) {
      this.estudiantes = estudiantesNoDeudores;
    } else {
      console.log('No hay estudiantes sin deuda');
      this.estudiantes = [];
    }
  }
  



}
