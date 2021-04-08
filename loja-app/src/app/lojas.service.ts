import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Loja } from './lojas/loja';


@Injectable({
  providedIn: 'root'
})
export class LojasService {

  apiURL : string | any = environment.apiURLBase + '/api/lojas';

  constructor( private http: HttpClient) {

   }

  salvar(loja: Loja) : Observable<Loja>{
  return this.http.post<Loja>(`${this.apiURL}`, loja);
  }

  atualizar(loja: Loja) : Observable<any>{
  return this.http.put<Loja>(`${this.apiURL}/${loja.id}`, loja);
  }

  getLojas() : Observable<Loja[]> {
    return this.http.get<Loja[]>(this.apiURL);
  }

  getLojaById(id: number) : Observable<Loja> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(loja: Loja) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${loja.id}`);
  }
}
