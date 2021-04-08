import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from './funcionario/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  apiURL : string | any = environment.apiURLBase + '/api/funcionarios';

  constructor(private http: HttpClient) { }

  salvar(funcionario: Funcionario) : Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.apiURL}`, funcionario);
  }

  getFuncionarios(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiURL);
  }
}
