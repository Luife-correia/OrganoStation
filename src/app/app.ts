import { Component, signal } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { Sidebar } from "./componentes/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OrganoStation');
}
