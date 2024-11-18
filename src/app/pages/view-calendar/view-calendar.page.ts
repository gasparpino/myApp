import { Component } from '@angular/core';
import * as moment from 'moment'; // Importamos Moment.js para manejar fechas

interface CalendarDay {
  day: moment.Moment;
  isCurrentMonth: boolean;
  isToday: boolean;
  tasks?: string[]; // Definimos una lista de tareas opcional
}

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.page.html',
  styleUrls: ['./view-calendar.page.scss'],
})
export class ViewCalendarPage {
  currentDate = moment();
  daysInMonth: CalendarDay[] = [];
  selectedDate: moment.Moment = moment(); // Fecha seleccionada
  selectedTasks: string[] = []; // Lista de tareas para el día seleccionado

  ngOnInit() {
    this.generateCalendar();
  }

  // Función para generar los días del calendario del mes actual
  generateCalendar() {
    const startOfMonth = this.currentDate.clone().startOf('month').startOf('week');
    const endOfMonth = this.currentDate.clone().endOf('month').endOf('week');
    const date = startOfMonth.clone().subtract(1, 'day');
    this.daysInMonth = [];

    while (date.isBefore(endOfMonth, 'day')) {
      this.daysInMonth.push({
        day: date.add(1, 'day').clone(),
        isCurrentMonth: date.month() === this.currentDate.month(),
        isToday: date.isSame(moment(), 'day'),
        tasks: this.generateTasksForDay(date), // Asignamos tareas ficticias
      });
    }
  }

  // Función para generar tareas ficticias para cada día (puedes personalizar esto)
  generateTasksForDay(date: moment.Moment): string[] {
    if (date.date() % 2 === 0) {
      return [`Tarea 1 para el ${date.format('DD/MM/YYYY')}`, `Tarea 2 para el ${date.format('DD/MM/YYYY')}`];
    }
    return []; // No hay tareas en días impares
  }

  // Navegar al mes anterior
  prevMonth() {
    this.currentDate.subtract(1, 'months');
    this.generateCalendar();
  }

  // Navegar al siguiente mes
  nextMonth() {
    this.currentDate.add(1, 'months');
    this.generateCalendar();
  }

  // Seleccionar un día específico y mostrar sus tareas
  selectDate(day: CalendarDay) {
    this.selectedDate = day.day;
    this.selectedTasks = day.tasks || []; // Si no hay tareas, mostramos un array vacío
  }

  // Función para verificar si un día es el seleccionado
  isSelected(day: moment.Moment): boolean {
    return this.selectedDate.isSame(day, 'day');
  }
}
