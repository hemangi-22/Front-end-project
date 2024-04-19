import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';

const routes: Routes = [
  { path: '', component: ProfileDisplayComponent },
  { path: 'map', component: InteractiveMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
