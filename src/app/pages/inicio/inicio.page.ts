
// inicio.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  tareas = [
    { nombre: 'Tarea 1', fecha: '2024-09-20' },
    { nombre: 'Tarea 2', fecha: '2024-09-21' },
  ];

  constructor(private navCtrl: NavController) {}

  openAddTaskPage() {
    this.navCtrl.navigateForward('/add-tarea');
  }

  openCalendarPage() {
    this.navCtrl.navigateForward('/view-calendar');
  }
  openReport() {
    this.navCtrl.navigateForward('/report');
  }

}
