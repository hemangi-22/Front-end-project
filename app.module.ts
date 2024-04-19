import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDisplayComponent,
    InteractiveMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
