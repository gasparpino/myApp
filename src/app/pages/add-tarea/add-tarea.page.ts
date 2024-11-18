// add-tarea.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.page.html',
  styleUrls: ['./add-tarea.page.scss'],
})
export class AddTareaPage {
  tarea = {
    titulo: '',
    descripcion: '',
    fechaRecordatorio: '',
    categoria: '',
    fechaVencimiento: ''
  };

  constructor(private navCtrl: NavController) {}

  addTask() {
    console.log('Nueva tarea añadida:', this.tarea);
    // Redirigir o realizar alguna acción después de añadir la tarea
  }
}
