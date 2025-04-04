import { Component } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButton, IonLabel, IonInput, IonCheckbox, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButton, IonLabel, IonInput, IonCheckbox, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    CommonModule, FormsModule
  ]
})
export class HomePage {
  location: { lat: number, lng: number } | null = null;

  constructor(private geolocationService: GeolocationService) {}

  async getLocation() {
    this.location = await this.geolocationService.getCurrentPosition();
  }
}
