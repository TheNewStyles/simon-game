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
  colorPattern = [];

    private startGame() {      
        this.randomNum = this.getRandomNumber(4);
        var color = this.assignColor(this.randomNum);
        this.colorPattern.push(color);
        this.glow(color);   
        this.randomPattern.push(this.randomNum);                      
    }

    private takeNextTurn(userPattern:number[], randomPattern:number[]) {      
      this.updateStepCount();     

      var randomNum = this.getRandomNumber(4)
      randomPattern.push(randomNum);
      var color = this.assignColor(randomNum);
      this.colorPattern.push(color);
      var that = this;   
        
      this.wait(1000);
      for (let i = 0; i < this.colorPattern.length; i++) {
        setTimeout( function timer(){
          that.glow(that.colorPattern[i]);
        }, i*1000 );
      }
      
    }

    private updateStepCount() {
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
      }, 700);
    }

    private displayStepCount(stepCount:number) {
      var stepCountElement = window.document.querySelector('#count-text');
      stepCountElement.textContent = String("0"+stepCount);
    }

    private recordUserPattern(event) {
      var id = this.assignId(event.target.id);
      var color = this.assignColor(id);
      this.glow(color);

      this.userPattern.push(id);

      if (this.userPattern.length === this.randomPattern.length) {
        this.hasCorrectPattern(this.userPattern, this.randomPattern);
        }       
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
        this.takeNextTurn(userPattern, randomPattern);
        this.userPattern = [];
      }
      else {
        alert('You Lost!');
      }      
    }

    private wait(ms){
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
        end = new Date().getTime();
     }
   }

}

