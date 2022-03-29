import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillEnter {

  currentPosition: Position;

  constructor() {
  }

  async ionViewWillEnter() {
    this.currentPosition = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 5000
    });
    console.log('Position: ' + JSON.stringify(this.currentPosition));
  }

}
