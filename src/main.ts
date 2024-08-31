import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from '.src/app/app.component'; // Verifique o caminho correto

platformBrowserDynamic().bootstrapComponent(AppComponent)
  .catch(err => console.error(err));
