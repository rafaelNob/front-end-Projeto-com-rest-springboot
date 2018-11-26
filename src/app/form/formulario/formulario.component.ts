import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/classe/cliente';
import { NgForm } from '@angular/forms';

class Cliente2 {
  nome: string;
  email: string;
  profissao = '';
}


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente2 = new Cliente2();
  profissoes = ['Programador', 'Empresário', 'Outra'];

  newCliente: Cliente = new Cliente();
  cliente = [];


  riscos = ['RISCO_A', 'RISCO_B', 'RISCO_C']
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.getLista()

  }
  novoCliente(): void {
    this.newCliente = new Cliente();

  }
  getLista() {


    this.clienteService.getLista()
      .subscribe(data => {
        this.cliente = data
        console.log(data);

      });
  }


  criar(form: NgForm) {
    

    this.newCliente.risco = form.value.risco
    this.clienteService.criarUsuario(this.newCliente).subscribe(data => {


    });
    this.newCliente = new Cliente();
    this.getLista();

  }

  excluir(cliente) {
    this.clienteService.deleteCliente(cliente.idCliente).subscribe(data => {
      console.log(data);

    });
    this.getLista();

  }




}
