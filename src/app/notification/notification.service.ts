import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../shared/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationSent: Subject<Notification> = new Subject<Notification>();

  constructor() { }

  send(type: string, message: string){
    this.notificationSent.next({
      type: type,
      message: message
    });
  }
}
