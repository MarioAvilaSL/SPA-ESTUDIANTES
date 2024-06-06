import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidosComponent } from './components/protegidos/protegidos.component';
import { AuthModule } from '@auth0/auth0-angular';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidosComponent,
    EstudiantesComponent,
    EstudianteComponent,
    
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-jworknacz5c6asoa.us.auth0.com',
      clientId: 'RDgCIXQkDOWq5s0hBAo0JGIcEcz5oGyA',
      authorizationParams: {
        redirect_uri:window.location.origin
      }
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
