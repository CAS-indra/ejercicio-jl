import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CabeceraComponent],
  imports: [CommonModule, RouterModule],/* Importar RouterModule para que funcione routerLink en html */
  exports: [CabeceraComponent],
})
export class LayoutModule {}
