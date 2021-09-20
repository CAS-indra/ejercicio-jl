import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TituloComponent } from './titulo/titulo.component';
import { HomeComponent } from './home/home.component';
import { ProyectosService } from './data/proyectos.service';

@NgModule({
  declarations: [AppComponent, TituloComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [ProyectosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
