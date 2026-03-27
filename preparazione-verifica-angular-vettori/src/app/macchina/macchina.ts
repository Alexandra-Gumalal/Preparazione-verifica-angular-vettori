import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [CommonModule],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css',
})
export class MacchinaComponent {
  @Input() nomeMacchina: string = "";

  // Punto 7: Vettore dei pezzi della macchina
  pezzi: string[] = ['Bulloni', 'Viti', 'Ferro'];
}
