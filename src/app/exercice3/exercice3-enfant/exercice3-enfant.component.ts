import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3-enfant',
  templateUrl: './exercice3-enfant.component.html',
  styleUrls: ['./exercice3-enfant.component.css']
})
export class Exercice3EnfantComponent implements OnInit {

  public useNgContent: boolean = false;

  inverseNgContent():void {
    this.useNgContent = !this.useNgContent;
  }

  constructor() { }

  ngOnInit(): void {
    this.inverseNgContent();
  }

}
