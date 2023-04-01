import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharlieComponent} from './Mapa/charlie/charlie.component';

const routes: Routes = [
  {path: '/reservas',
  component: CharlieComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
