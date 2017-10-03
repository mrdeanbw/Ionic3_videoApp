import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public  alertCtrl: AlertController, 
              public navCtrl: NavController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  handle(){
    console.log('___', 'sdfd');
    // this.navCtrl.push(ContactPage);
  }
  onPressMenu(){
    console.log('onPressMenu');
  }
}
