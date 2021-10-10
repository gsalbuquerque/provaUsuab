import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConversorComponent } from './conversor/conversor.component';
import { FormsModule } from '@angular/forms';
//import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, ConversorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}