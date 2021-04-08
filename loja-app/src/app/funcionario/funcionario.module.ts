import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListaComponent } from './funcionario-lista/funcionario-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FuncionarioFormComponent,
    FuncionarioListaComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    FormsModule,
    RouterModule
  ], exports : [
    FuncionarioFormComponent,
    FuncionarioListaComponent
  ]
})
export class FuncionarioModule { }
