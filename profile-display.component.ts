import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {
  profiles: any[];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
  }

  showProfileOnMap(profile: any) {
    // Implement logic to show profile on map
  }
}
