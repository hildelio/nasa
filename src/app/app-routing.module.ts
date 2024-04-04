import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AstronautFormComponent } from './pages/astronaut-form/astronaut-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'astronaut-form', component: AstronautFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
