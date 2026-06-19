import { Component } from '@angular/core';
import { Jogo } from '../jogo/jogo';
import { jogos } from '../../mock-jogos';

@Component({
  selector: 'app-todos-jogos',
  imports: [Jogo],
  templateUrl: './todos-jogos.html',
  styleUrl: './todos-jogos.css',
})
export class TodosJogos {
    jogos = jogos;

}
