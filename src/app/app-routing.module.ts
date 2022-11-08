import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [{
  path: 'pages',
  loadChildren: (): Promise<typeof PagesModule> =>
      import('./pages/pages.module').then((module) => module.PagesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
