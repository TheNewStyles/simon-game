import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

    private startGame(event) {
      var stepCount = 0;
      //create random number between 0-3
      var randomNum = this.getRandomNumber(4);
      //match up that number to a color and light up the color square in ui
      this.glow(randomNum);
      //save random num in array
      var randomPattern = [];
      randomPattern.push(randomNum);      
      //increment step count - pattern count 
      stepCount++;

      //allow user to match pattern - save user pattern in variable
      //compare values
      //if values === continue - increment step count - increment pattern count
        //else reset pattern count - step count remains (strict will be different)
    }

    private getRandomNumber(max:number) {
      return Math.floor(Math.random() * max) + 1;
    }

    private glow(randomNum:number) {
      var color = '';
      var element;

      switch (randomNum) {
        case 1:
          color = 'green';
          break;
        case 2:
          color = 'red';
          break;
        case 3:
          color = 'yellow';
          break;
        case 4:
          color = 'blue';
          break;
      }
      element = window.document.querySelector('#' + color)
      element.className = 'item ' + color + '-glow'; 
    }
}
