import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Jogo } from '../jogo/jogo';
import { jogos } from '../../mock-jogos';
import { JogoInterface } from '../jogo/jogo.inteface';

@Component({
  selector: 'app-barra-pesquisa',
  imports: [FormsModule, Jogo],
  templateUrl: './barra-pesquisa.html',
  styleUrl: './barra-pesquisa.css',
})
export class BarraPesquisa {
textoPesquisa = '';
jogosEncontrados: JogoInterface[] = [];
overlayPesquisaAberto = false;
overlayFavoritosAberto = false;

pesquisarJogo() {
  const termo = this.textoPesquisa.toLowerCase().trim();

  this.jogosEncontrados = jogos.filter(jogo =>
    jogo.nome.toLowerCase().includes(termo)
  );

  if (!termo) {
  this.jogosEncontrados = [];
  this.overlayPesquisaAberto = false;
  return;

} if (!this.overlayFavoritosAberto)
    {this.overlayPesquisaAberto = true;}
}

get favoritos() {
  return jogos.filter(jogo => jogo.favorito);
}

abrirFavoritos() {
  if (!this.overlayPesquisaAberto)
    {this.overlayFavoritosAberto = true;}
}

fecharOverlays() {
  this.overlayPesquisaAberto = false;
  this.overlayFavoritosAberto = false;
}

voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

}
