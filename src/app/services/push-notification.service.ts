import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.onMessage((message) => {
      console.log('Message received:', message);
      this.currentMessage.next(message);
    });
  }

  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      console.log('Permission:', permission);
      if (permission === 'granted') {
        this.angularFireMessaging.getToken.subscribe(
          (token) => {
            console.log('Token:', token);
            // Puedes enviar el token al servidor para que pueda enviar notificaciones push a este dispositivo
          },
          (error) => {
            console.error('Unable to get token.', error);
          }
        );
      } else {
        console.error('Permission denied.');
      }
    } catch (error) {
      console.error('Unable to get permission to notify.', error);
    }
  }
}
