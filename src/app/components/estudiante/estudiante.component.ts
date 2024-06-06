import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../../services/estudiantes.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
  estudiante: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _estudiantesService: EstudiantesService) {
    this.activatedRoute.params.subscribe(params => {
      this.estudiante = _estudiantesService.getEstudiante(params['id']);
      console.log(this.estudiante);
    });
  }
}
