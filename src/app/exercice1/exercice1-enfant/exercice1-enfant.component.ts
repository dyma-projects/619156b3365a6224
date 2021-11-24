import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

 
  // Initialisation du compteur à 0 :
  counterValue: number = 0;
  
  @Output() private changeCounter : EventEmitter<any> = new EventEmitter<any>();
  @Input() public compteur: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  incrementCounter(): void {
    this.counterValue++;
    this.changeCounter.emit({
      value: this.counterValue
    });
  }
  
  decrementCounter(): void {
    this.counterValue--;
    this.changeCounter.emit({
      value: this.counterValue
    });
  }


}
