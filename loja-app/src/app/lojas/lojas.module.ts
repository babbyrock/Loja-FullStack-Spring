import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LojasRoutingModule } from './lojas-routing.module';
import { LojasFormComponent } from './lojas-form/lojas-form.component';
import { FormsModule } from '@angular/forms';
import { LojasListaComponent } from './lojas-lista/lojas-lista.component';


@NgModule({
  declarations: [
    LojasFormComponent,
    LojasListaComponent
  ],
  imports: [
    CommonModule,
    LojasRoutingModule,
    FormsModule
  ],exports:[
    LojasFormComponent,
    LojasListaComponent
  ]
})
export class LojasModule { }
