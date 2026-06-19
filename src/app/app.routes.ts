import { Routes } from '@angular/router';
import { ListaJogos } from './componentes/lista-jogos/lista-jogos';
import { TodosJogos } from './componentes/todos-jogos/todos-jogos';

export const routes: Routes = [
    { path: '', redirectTo: 'home',pathMatch: 'full' },
    { path: 'home', component: ListaJogos, title: 'OrganoStation'},
    { path: 'todos-jogos' , component: TodosJogos, title: 'OrganoStation - Todos os Jogos'},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }

];
