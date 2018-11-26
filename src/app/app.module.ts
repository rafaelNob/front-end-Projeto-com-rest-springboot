import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './form/formulario/formulario.component';
import { NavbarComponent } from './topo/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './service/cliente.service';
import { ListaClienteComponent } from './lista/lista-cliente/lista-cliente.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    ListaClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
