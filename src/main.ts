import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SearchComponent } from './app/search/search.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Adicione aqui
  ]
}).catch(err => console.error(err));
