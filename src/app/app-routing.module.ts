import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'completar-registro',
    loadChildren: () => import('./auth/pages/completar-registro/completar-registro.module').then( m => m.CompletarRegistroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./auth/pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'request-login',
    loadChildren: () => import('./auth/pages/request-login/request-login.module').then( m => m.RequestLoginPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./auth/pages/users/users.module').then( m => m.UsersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
