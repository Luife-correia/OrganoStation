import { Component } from '@angular/core';
import { BarraPesquisa } from "../barra-pesquisa/barra-pesquisa";

@Component({
  selector: 'app-cabecalho',
  imports: [BarraPesquisa],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {}
