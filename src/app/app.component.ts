import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage, Messaging } from "firebase/messaging";
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private pushNotificationService: PushNotificationService) {}

  ngOnInit(): void {
    this.pushNotificationService.requestPermission();
  }
}
