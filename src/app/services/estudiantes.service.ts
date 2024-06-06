import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {


// Datos de estudiantes
private estudiantes: Estudiantes[] = [
  {
    cedula: "0706166501",
    nombre: "Mario Avila",
    edad: 17,
    direccion: "Calle 1, Pasaje",
    observacion: "Sin observaciones",
    anio: "bachillerato",
    deuda: 0
  },
  {
    cedula: "0907363672",
    nombre: "Noelia Zerda",
    edad: 17,
    direccion: "Calle 2, Machala",
    observacion: "Participa en el club de lectura",
    anio: "bachillerato",
    deuda: 0
  },
  {
    cedula: "0373281973",
    nombre: "Diego Avila",
    edad: 12,
    direccion: "Calle 3, Pasaje",
    observacion: "Necesita mejorar en matemáticas",
    anio: "básica",
    deuda: 15.00
  },
  {
    cedula: "0400875708",
    nombre: "Ariana Pardo",
    edad: 16,
    direccion: "Calle 4, Cuenca",
    observacion: "Excelente en ciencias",
    anio: "preparatoria",
    deuda: 12.50
  },
  {
    cedula: "050653209",
    nombre: "Luis Pacheco",
    edad: 17,
    direccion: "Calle 5, Machala",
    observacion: "Buena conducta",
    anio: "bachillerato",
    deuda: 0
  },
  {
    cedula: "0607333910",
    nombre: "Elisa Torres",
    edad: 13,
    direccion: "Calle 6, Pasaje",
    observacion: "Necesita apoyo en inglés",
    anio: "básica",
    deuda: 19.00
  },
  {
    cedula: "0708091011",
    nombre: "Diego Jativa",
    edad: 17,
    direccion: "Calle 7, Santa Rosa",
    observacion: "Destacado en deportes",
    anio: "bachillerato",
    deuda: 12.00
  },
  {
    cedula: "0889745612",
    nombre: "Laura Mendoza",
    edad: 14,
    direccion: "Calle 8, Pasaje",
    observacion: "Activa en actividades de integracion",
    anio: "preparatoria",
    deuda: 13.55
  },
  {
    cedula: "0911111111",
    nombre: "Jose Pardo",
    edad: 14,
    direccion: "Calle 9, Machala",
    observacion: "Mejorar asistencia y puntualidad",
    anio: "básica",
    deuda: 11.08
  },
  {
    cedula: "10112345614",
    nombre: "Elena Garcia",
    edad: 16,
    direccion: "Calle 10, Pasaje",
    observacion: "Excelente rendimiento académico",
    anio: "bachillerato",
    deuda: 0
  }
];


  constructor() { 
    console.log("Servicio de estudiantes listo para usar...");
  }


  
  getEstudiantes(): Estudiantes[] {
    return this.estudiantes;
  }

  getEstudiante(idx: number): Estudiantes {
    return this.estudiantes[idx];
  }

  invocador(cedula: string): number {
    let h = -1;
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].cedula === cedula) {
        h = i; 
        break;      
      }
    }
    return h;
  }  

  getEstudiantesPorAnio(anio: string): Estudiantes[] {
    return this.estudiantes.filter(estudiante => estudiante.anio.toLowerCase() === anio.toLowerCase());
  }








}


export interface Estudiantes {
  cedula: string;
  nombre: string;
  edad: number;
  direccion: string;
  observacion: string;
  anio: "básica" | "preparatoria" | "bachillerato";
  deuda: number;
  
}