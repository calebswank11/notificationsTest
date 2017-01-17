import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// services
import { CallService } from '../../services/call.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string = 'https://172.29.3.134/notifications/api/notifications/admin';
  options: Object = {"x-auth-company": "cst", "x-auth-user": "998", "content-type": "application/json"};
  notifications: Object;

  constructor(
    public navCtrl: NavController,
    public callService: CallService
  ) {

  }

  ngOnInit(){
    this.callService.get(this.url, this.options)
      .then(data => {
        console.log(data);
        this.notifications = data['notifications'];
      })
  }

  // this.callService.get(`${this.setupUrl}${this.dataKey}`)
  //   .then(data => {
  //     console.log(data);
  //     let dataKeyString = data.result[0].dataset_list;
  //     dataKeyString = dataKeyString.split(',');
  //     this.dataSet = dataKeyString;
  //   })
  //   .catch(error => {
  //     // console.log(error)
  //   });

}
