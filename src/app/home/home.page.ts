import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Geolocation, Position } from '@capacitor/geolocation';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillEnter {

  currentPosition: Position;
  phoneNumber: string;

  constructor(private sms: SMS) {
  }

  async ionViewWillEnter() {
    this.currentPosition = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 5000
    });
    console.log('Position: ' + JSON.stringify(this.currentPosition));
  }

  sendSMS() {
    this.sms.send(this.phoneNumber, `${this.currentPosition.coords.latitude}, ${this.currentPosition.coords.longitude}`)
      .then(r => {
        console.log(JSON.stringify(r));
      });
  }

}
