import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidosComponent } from './components/protegidos/protegidos.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'precios', component:PreciosComponent},
  {path: 'estudiantes', component:EstudiantesComponent},
  {path: 'estudiante/:id', component:EstudianteComponent},
  {path: 'protegida', component:ProtegidosComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
