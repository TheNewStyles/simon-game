import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  stepCount = 0;
  userPattern = [];

    private startGame(event) {
      //create random number between 0-3
      var randomNum = this.getRandomNumber(4);
      //match up that number to a color and light up the color square in ui
      var color = this.assignColor(randomNum);
      this.glow(color);
      //save random num in array
      var randomPattern = [];
      randomPattern.push(randomNum);      
      //increment step count - pattern count 
      this.stepCount++;
      this.displayStepCount(this.stepCount);
      //Save user pattern in variable      
      //Allow user to match pattern 
      //compare values
      //if values === continue - increment step count - increment pattern count
        //else reset pattern count - step count remains (strict will be different)
      if (!this.hasCorrectPattern(this.userPattern, randomPattern)) {
        //exit game - else keep playing
      }      
    }

    private getRandomNumber(max:number) {
      return Math.floor(Math.random() * max) + 1;
    }    

    private glow(color:string) {
      var element = window.document.querySelector('#' + color)
      element.className = 'item ' + color + '-glow';

      setTimeout(function() {
        element.className = 'item';
      }, 1000);
    }

    private displayStepCount(stepCount:number) {
      var stepCountElement = window.document.querySelector('#count');
      stepCountElement.textContent = String(stepCount);
    }

    private recordUserPattern(event) {
      var id = this.assignId(event.target.id);
      this.userPattern.push(id);
    }

    private assignColor(randomNum:number) {
      var color = '';

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

      return color;                
    }

    private assignId(color:string) {
      var id = 0;

      switch (color) {        
        case 'green':
          id = 1;
          break;
        case 'red':
          id = 2;
          break;
        case 'yellow':
          id = 3;
          break;
        case 'blue':
          id = 4;
          break;
      }

      return id;                
    }

    private hasCorrectPattern(userPattern:number[], randomPattern:number[]) {
      //compare arrays if the same return true else false      
    }
}

