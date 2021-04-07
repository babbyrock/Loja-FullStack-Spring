import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojasFormComponent } from './lojas-form/lojas-form.component';
import { LojasListaComponent } from './lojas-lista/lojas-lista.component';

const routes: Routes = [
  { path: 'lojas-form', component: LojasFormComponent},
  { path: 'lojas-form/:id', component: LojasFormComponent},
  { path: 'lojas-lista', component: LojasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LojasRoutingModule { }
