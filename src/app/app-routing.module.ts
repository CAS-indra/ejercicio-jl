import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  {
    path: 'auth/login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {
    path: 'transaccion/new',
    loadChildren: () => import('./nueva-transaccion/nueva-transaccion.module').then(m => m.NuevaTransaccionModule) },
  { 
    path: 'transaccion', 
    loadChildren: () => import('./project-editor/project-editor.module').then(m => m.ProjectEditorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
