// add-category.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage {
  categoryName = '';

  constructor(private navCtrl: NavController) {}

  addCategory() {
    if (this.categoryName.trim().length > 0) {
      console.log('Nueva categoría añadida:', this.categoryName);
      // Aquí podrías guardar la categoría en algún servicio o base de datos
      this.navCtrl.back();  // Volver a la página anterior después de agregar
    } else {
      console.log('El campo de categoría está vacío.');
    }
  }
}
