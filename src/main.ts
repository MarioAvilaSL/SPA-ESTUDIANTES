import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-jworknacz5c6asoa.us.auth0.com',
      clientId: 'RDgCIXQkDOWq5s0hBAo0JGIcEcz5oGyA',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
