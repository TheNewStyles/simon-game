import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  private stepCount = 0;
  private randomNum = 0;
  private userPattern = [];
  private randomPattern = [];
  private colorPattern = [];
  private isOn = false;
  private isStrict = false;  
  private isRetry = false;

    public turnOnOff() {
      this.isOn = this.isOn ? false : true;
      var stepCountElement = window.document.querySelector('#count-text');   
      stepCountElement.textContent = "--";  
      this.isOn ? 
        stepCountElement.className = 'count-glow'
        : stepCountElement.className = '';

      this.reset();
    }

    public reset() {
      this.stepCount = 0;
      this.randomNum = 0;
      this.userPattern = [];
      this.randomPattern = [];
      this.colorPattern = [];      
    }

    public start() {   
      if (!this.isOn || this.stepCount >= 1) {
        return;
      }       
      
      this.randomNum = this.getRandomNumber(4);
      var color = this.assignColor(this.randomNum);
      this.colorPattern.push(color);      
      this.glow(color);  
      this.playAudio(color); 
      this.randomPattern.push(this.randomNum);                      
    }

    public recordUserPattern(event) {
      if (!this.isOn) {
        return;
      }  

      var id = this.assignId(event.target.id);
      this.userPattern.push(id);
      var color = this.assignColor(id);
      var that = this;
      
      this.glow(color);  
      this.playAudio(color); 

      if (this.userPattern.length >= 20) {
        this.displayWinner();
        return;
      }

      //TODO CHECK ON EVERY STEP NOT JUST AT FINAL
      if (this.userPattern.length === this.randomPattern.length) {
        setTimeout(function() {
         that.checkPattern(that.userPattern, that.randomPattern);
        }, 600);
      }       
    }

    public turnOnStrict() {
      if (this.stepCount >= 1) {
        return;
      }

      this.isStrict = this.isStrict ? false : true;
      var strict = window.document.querySelector('#strict');
      
      this.isStrict ? strict.className = 'item-button ' + 'strict-glow'
                    : strict.className = 'item-button';
    }

    private takeNextTurn(userPattern:number[], randomPattern:number[]) {      
      this.updateStepCount();
      var that = this; 

      if (!this.isRetry) {
        var randomNum = this.getRandomNumber(4)
        randomPattern.push(randomNum);
        var color = this.assignColor(randomNum);
        this.colorPattern.push(color);
      }        
        
      this.wait(1250);
      this.isRetry = false;
      for (let i = 0; i < this.colorPattern.length; i++) {
        setTimeout( function timer(){
          that.glow(that.colorPattern[i]);
          that.playAudio(that.colorPattern[i]);       
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
      var element = window.document.querySelector('#' + color);
      element.className = 'item ' + color + '-glow';
      
      setTimeout(function() {
        element.className = 'item';
      }, 600);
    }

    private playAudio(color:string) {
      var green = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"); 
      var red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"); 
      var yellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"); 
      var blue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"); 

      switch (color) {        
        case 'green':
          green.play();
          break;
        case 'red':
          red.play();
          break;
        case 'yellow':
          yellow.play();
          break;
        case 'blue':
          blue.play();
          break;
        case 'lost':
          green.play();
          red.play();
          yellow.play();
          blue.play();
          break;
      }
    }

    private displayStepCount(stepCount) {
      var stepCountElement = window.document.querySelector('#count-text');
      stepCount <= 9 ? 
        stepCountElement.textContent = String("0"+stepCount) 
        : stepCountElement.textContent = String(stepCount);
    }    

    private displayWinner() {
      this.reset();
      var stepCountElement = window.document.querySelector('#count-text');
      stepCountElement.textContent = "00";
      alert("Congrats! You have won!");
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

    private checkPattern(userPattern:number[], randomPattern:number[]) {
      var userPatternStr = userPattern.toString();
      var randomPatternStr = randomPattern.toString();

      if (userPatternStr === randomPatternStr) {       
        this.takeNextTurn(userPattern, randomPattern);
        this.userPattern = [];
      }
      else {
        if (!this.isStrict) {
          var that = this;          
          this.incorrectPattern(); 
          setTimeout(function() {
            that.takeNextTurn(userPattern, randomPattern)
          }, 1000);  
        } else {
          var that = this;     
          this.strictIncorrectPattern();          
          setTimeout(function() {
            that.start();
          }, 1000);
        }      
      }      
    }

    private incorrectPattern() {
      this.playAudio('lost');
      this.isRetry = true;
      this.userPattern = [];
      this.stepCount = this.stepCount - 1;
      var stepCountElement = window.document.querySelector('#count-text');
      stepCountElement.textContent = '!!';
      var that = this;

      setTimeout(function() {
        that.stepCount > 9 ? 
          stepCountElement.textContent = that.stepCount.toString() 
          : stepCountElement.textContent = '0' + that.stepCount;
      }, 1000); 
    }

    private strictIncorrectPattern() {
      this.playAudio('lost');
      var stepCountElement = window.document.querySelector('#count-text');
      stepCountElement.textContent = "!!";

      this.reset();

      setTimeout(function() {
        stepCountElement.textContent = "00";
      }, 1000);    
    }

    private wait(ms:number){
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
        end = new Date().getTime();
     }
    }

}

