import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private title: string = 'Browser Push Notifications!';

  constructor(private _notificationService: AppService) {
    this._notificationService.requestPermission();
  }

  ngOnInit() { }

  notify() {
    let data: Array<any> = [];
    data.push({
      'title': 'Approval',
      'alertContent': 'This is First Alert -- By Debasis Saha'
    });
    this._notificationService.generateNotification(data);
  }

}
