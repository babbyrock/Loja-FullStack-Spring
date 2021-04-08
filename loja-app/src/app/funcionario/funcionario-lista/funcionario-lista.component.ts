import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/funcionario.service';
import { LojasService } from 'src/app/lojas.service';
import { Loja } from 'src/app/lojas/loja';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-lista',
  templateUrl: './funcionario-lista.component.html',
  styleUrls: ['./funcionario-lista.component.css']
})
export class FuncionarioListaComponent implements OnInit {
  funcionarios : Funcionario[] = [];
  lojas : Loja[] = [];

  constructor(
    private lojaService: LojasService,
    private service: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.service
    .getFuncionarios()
    .subscribe( response => this.funcionarios = response);
    console.log(Funcionario)
  }

}
