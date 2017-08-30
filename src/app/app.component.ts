import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  stepCount = 0;
  randomNum = 0;
  userPattern = [];
  randomPattern = [];

    private startGame() {      
        this.randomNum = this.getRandomNumber(4);
        var color = this.assignColor(this.randomNum);
        this.glow(color);   
        this.randomPattern.push(this.randomNum);
        this.stepCount++;
        this.displayStepCount(this.stepCount);               
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

      this.hasCorrectPattern(this.userPattern, this.randomPattern);
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
      var userPatternStr = userPattern.toString();
      var randomPatternStr = randomPattern.toString();

      if (userPatternStr === randomPatternStr) {
        this.startGame();
      }
      else {
        alert('You Lost!');
      }      
    }
    
}

