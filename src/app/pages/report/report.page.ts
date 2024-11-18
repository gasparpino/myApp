// report.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage {

  constructor(private navCtrl: NavController) {}

  openHistoryPage() {
    this.navCtrl.navigateForward('/history');
  }
}
