import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  categoriaAtiva = 'inicio';

 @HostListener('window:scroll')
aoRolarPagina() {
  const chegouNoFim =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

  if (chegouNoFim) {
    this.categoriaAtiva = 'fps';
    return;
  }

  if (window.scrollY < 300) {
    this.categoriaAtiva = 'inicio';
    return;
  }

  const categorias = [
    'action-adventure',
    'hack-slash',
    'fighting',
    'racing',
    'rpg',
    'sports',
    'survival-horror',
    'fps'
  ];

  for (const categoria of categorias) {
    const elemento = document.getElementById(categoria);

    if (elemento) {
      const topo = elemento.getBoundingClientRect().top;

      if (topo <= 150) {
        this.categoriaAtiva = categoria;
      }
    }
  }
}

}
