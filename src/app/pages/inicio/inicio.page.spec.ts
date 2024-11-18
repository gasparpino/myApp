// src/app/pages/inicio/inicio.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

 // Declarar un array de tareas para evitar el error
 tareas = [
  { nombre: 'Tarea 1', fecha: '20/09/2024' },
  { nombre: 'Tarea 2', fecha: '21/09/2024' },
  { nombre: 'Tarea 3', fecha: '22/09/2024' }
];

  constructor(private navCtrl: NavController) {}

  openAddTaskPage() {
    // Navegar a la página de añadir tarea
    this.navCtrl.navigateForward('/add-task');
  }

  openCalendarPage() {
    // Navegar a la página de calendario
    this.navCtrl.navigateForward('/calendar');
  }


  
}
