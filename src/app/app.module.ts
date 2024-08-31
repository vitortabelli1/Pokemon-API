import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule aqui
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component'; // Ajuste o caminho conforme necessário

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicione o HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
