import { Component } from '@angular/core';
import { ListaJogos } from "../lista-jogos/lista-jogos";

@Component({
  selector: 'app-todos-jogos',
  imports: [ListaJogos],
  templateUrl: './todos-jogos.html',
  styleUrl: './todos-jogos.css',
})
export class TodosJogos {}
