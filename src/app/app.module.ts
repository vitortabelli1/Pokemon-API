import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component'; 
import { FormsModule } from '@angular/forms';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { SearchComponent } from './search/search.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UppercasePipe,
    ChangeTitleComponent

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SearchComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
