import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component'; // Importe o ButtonComponent
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SearchComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
