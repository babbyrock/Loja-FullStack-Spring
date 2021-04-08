import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/funcionario.service';
import { LojasService } from 'src/app/lojas.service';
import { Loja } from 'src/app/lojas/loja';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  lojas : Loja[] = [];
  funcionario : Funcionario | any;

  constructor(
    private lojaService: LojasService,
    private service: FuncionarioService
  ) {
    this.funcionario = new Funcionario();
   }

  ngOnInit(): void {
    this.lojaService
    .getLojas()
    .subscribe( response => this.lojas = response);
  }

  onSubmit(){
    this.service.salvar(this.funcionario)
    .subscribe( response => {
      console.log(this.funcionario);
    })
  }

}
