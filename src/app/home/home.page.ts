import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRange, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonRange, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {


  volume: number = 50;
  testBtnDisabled: boolean = true;
  constructor() { }

  test() {
    alert(`Volume: ${this.volume}`);
  }
}
