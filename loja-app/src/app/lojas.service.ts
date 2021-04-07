import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loja } from './lojas/loja';


@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor( private http: HttpClient) {

   }

  salvar(loja: Loja) : Observable<Loja>{
  return this.http.post<Loja>('http://localhost:8080/api/lojas/', loja);
  }

  atualizar(loja: Loja) : Observable<any>{
  return this.http.put<Loja>(`http://localhost:8080/api/lojas/${loja.id}`, loja);
  }

  getLojas() : Observable<Loja[]> {
    return this.http.get<Loja[]>('http://localhost:8080/api/lojas/');
  }

  getLojaById(id: number) : Observable<Loja> {
    return this.http.get<any>(`http://localhost:8080/api/lojas/${id}`);
  }

  deletar(loja: Loja) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/lojas/${loja.id}`);
  }
}
