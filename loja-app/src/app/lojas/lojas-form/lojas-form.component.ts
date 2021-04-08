import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { LojasService } from 'src/app/lojas.service';
import { Loja } from '../loja';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-lojas-form',
  templateUrl: './lojas-form.component.html',
  styleUrls: ['./lojas-form.component.css']
})
export class LojasFormComponent implements OnInit {

  loja: Loja | any;
  success: boolean = false;
  errors: String[] | any;
  id: number | any;




  constructor(
    private service: LojasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.loja = new Loja();

   }

   ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe (urlParams =>{
      this.id = urlParams['id'];
      this.service
        .getLojaById(this.id)
        .subscribe(response => this.loja = response,
          errorResponse => this.loja = new Loja()
          )
    })
  }

  onSubmit(){

    if(this.id){
      this.service
      .atualizar(this.loja)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
      })

    }else{
    this.service
    .salvar(this.loja)
    .subscribe(response => {
      this.success = true;
      this.errors = null;
      this.loja = response;
    } , errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    })
  }
  }

  voltarParaListagem(){
    this.router.navigate(['/lojas-lista'])
  }

}
