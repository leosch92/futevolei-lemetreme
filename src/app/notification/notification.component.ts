import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from '../shared/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notification: Notification;
  visible: boolean = false;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notificationSent.subscribe(
      (notification: Notification) => {
        this.notification = notification;
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 4000);
      }
    );
  }

  getNotificationTypeClass() {
    switch (this.notification.type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-danger';
      default:
        return 'alert-primary';
    }
  }

  ngOnDestroy(): void {
    this.notificationService.notificationSent.unsubscribe();
  }

}
