import { Component } from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private oneSignal: OneSignal) {
      this.platform.ready().then(() => {
          this.initOneSignal();  
      });
  }



  private initOneSignal(){
    
    this.oneSignal.startInit('47b4e360-cb13-48fa-90e7-409da7b91164', '969634075809');
    
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((jsondata) => {
    // do something when notification is received
    console.log(JSON.stringify(jsondata));
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.getIds().then(res => console.log(JSON.stringify(res)));

    this.oneSignal.endInit();

  }

 
}
