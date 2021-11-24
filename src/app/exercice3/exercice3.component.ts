import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})

export class Exercice3Component {

  public helloNgContent: string = "Je dois être affiché dans le component app-content-enfant !";
  
  constructor() { }

}
