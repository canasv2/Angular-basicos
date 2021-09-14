import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Heroes_module } from './heroes/heroes.module';
import { Contador_module } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Heroes_module,
    Contador_module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
