import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StyloComponent } from './stylo/stylo.component';
import { InitComponent } from './init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    StyloComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InitComponent]
//  bootstrap: [StyloComponent]
//  bootstrap: [StyloComponent]
})
export class AppModule { }
