import { Component } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButton, IonLabel, IonInput, IonCheckbox, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Network } from '@capacitor/network';
import { Keyboard, KeyboardInfo } from '@capacitor/keyboard';

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

  constructor(private geolocationService: GeolocationService, private keyboard: KeyboardInfo) {}

  async getLocation() {
    this.location = await this.geolocationService.getCurrentPosition();
  }

  takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });

    console.log(image.dataUrl);
  };

  logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
  
    console.log('Network status:', status);
  };

}
