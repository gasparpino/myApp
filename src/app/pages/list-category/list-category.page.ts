// list-category.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.page.html',
  styleUrls: ['./list-category.page.scss'],
})
export class ListCategoryPage {
  categories = ['Trabajo', 'Familia', 'Tiempo Libre'];

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();  // Navegar hacia atrás en la pila de navegación
  }
}
