import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { LojasService } from 'src/app/lojas.service';
import { Loja } from '../loja';

@Component({
  selector: 'app-lojas-lista',
  templateUrl: './lojas-lista.component.html',
  styleUrls: ['./lojas-lista.component.css']
})
export class LojasListaComponent implements OnInit {

  lojas : Loja[] = [];
  lojaSelecionada: Loja | any;
  mensagemSucesso: string | any;
  mensagemErro: string | any;

  constructor( private service : LojasService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getLojas()
    .subscribe( resposta => this.lojas = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/lojas-form'])
  }

  confirmardelecao(loja: Loja){
    this.lojaSelecionada = loja;
  }

  deletarLoja(){
    this.service.deletar(this.lojaSelecionada)
    .subscribe(
      response => {
        this.mensagemSucesso = 'Loja deletada com sucesso!'
        this.ngOnInit();
      },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar a loja.'
    )
  }

}
