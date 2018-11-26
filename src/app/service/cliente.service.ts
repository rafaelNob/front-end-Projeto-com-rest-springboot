import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../classe/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 private  userHttp ='http://localhost:8081/api/clientes';
  constructor(private http: HttpClient) { }

  getLista(){
    return this.http.get<Cliente[]>(this.userHttp);
  }

  criarUsuario(cliente: Cliente) {
    return this.http.post(this.userHttp +'/criar', cliente);
  } 

  deleteCliente(id: number){
    return this.http.delete(this.userHttp + '/' + id  );
  }

}
