import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('myExercice2Input', {static: true})
  public element: ElementRef<HTMLInputElement>;

  updateInput(): void {
    this.valeur = this.element.nativeElement.value;
  }

  constructor() { }

  ngOnInit(): void {
    this.updateInput()   
  }

}
