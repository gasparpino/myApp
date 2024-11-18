import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'add-tarea',
    loadChildren: () => import('./pages/add-tarea/add-tarea.module').then( m => m.AddTareaPageModule)
  },
  {
    path: 'view-calendar',
    loadChildren: () => import('./pages/view-calendar/view-calendar.module').then( m => m.ViewCalendarPageModule)
  },
  {
    path: 'list-category',
    loadChildren: () => import('./pages/list-category/list-category.module').then( m => m.ListCategoryPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./pages/add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
