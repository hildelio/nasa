import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AstronautFormComponent } from './pages/astronaut-form/astronaut-form.component';
import { SolarSystemPlanetsComponent } from './pages/solar-system-planets/solar-system-planets.component';
import { NasaEventListComponent } from './pages/nasa-event-list/nasa-event-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event-list', component: NasaEventListComponent },
  { path: 'solar-system-planets', component: SolarSystemPlanetsComponent },
  { path: 'astronaut-form', component: AstronautFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
