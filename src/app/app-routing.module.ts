import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'consumo',
    loadChildren: () => import('./consumo/consumo.module').then( m => m.ConsumoPageModule)
  },
  {
    path: 'periodo',
    loadChildren: () => import('./periodo/periodo.module').then( m => m.PeriodoPageModule)
  },
  {
    path: 'residencia',
    loadChildren: () => import('./residencia/residencia.module').then( m => m.ResidenciaPageModule)
  },
  {
    path: 'tabela',
    loadChildren: () => import('./tabela/tabela.module').then( m => m.TabelaPageModule)
  },
  {
    path: 'caern',
    loadChildren: () => import('./caern/caern.module').then( m => m.CaernPageModule)
  },
  {
    path: 'graficos',
    loadChildren: () => import('./graficos/graficos.module').then( m => m.GraficosPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'vazamentos',
    loadChildren: () => import('./vazamentos/vazamentos.module').then( m => m.VazamentosPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'list-usuarios',
    loadChildren: () => import('./list-usuarios/list-usuarios.module').then( m => m.ListUsuariosPageModule)
  },
  {
    path: 'edit-usuario',
    loadChildren: () => import('./edit-usuario/edit-usuario.module').then( m => m.EditUsuarioPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
