import { Component } from '@angular/core';
import { BarraPesquisa } from "../barra-pesquisa/barra-pesquisa";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cabecalho',
  imports: [BarraPesquisa, RouterLink],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {}
