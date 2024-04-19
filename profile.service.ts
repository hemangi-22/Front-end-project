import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profiles: any[] = [
    // Sample profile data
    { name: 'John Doe', photo: '...', description: '...' },
    { name: 'Jane Smith', photo: '...', description: '...' },
    // Add more profiles as needed
  ];

  constructor() { }

  getProfiles() {
    return this.profiles;
  }
}
