import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  
  @Output() cardClicked = new EventEmitter<void>();

  onClick(): void {
    this.cardClicked.emit();
  }
}
