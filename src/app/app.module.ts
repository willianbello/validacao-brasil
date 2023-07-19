import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidacaoBrasilModule } from 'projects/validacao-brasil/src/lib/validacao-brasil.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ValidacaoBrasilModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
