import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListaComponent } from './funcionario-lista/funcionario-lista.component';

const routes: Routes = [
  { path: 'funcionario-form', component: FuncionarioFormComponent },
  { path: 'funcionario-lista', component: FuncionarioListaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
