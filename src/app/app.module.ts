import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Adicione esta linha
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicione esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
