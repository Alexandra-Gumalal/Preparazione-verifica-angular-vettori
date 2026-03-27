import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  // punto 2:lista vettore
  macchine: string[] = [
    'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10'
  ];
}
