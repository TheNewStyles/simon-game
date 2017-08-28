import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    ngOnInit(){
      console.log('here I am');
    }

    startGame(event) {
      var randomNum = this.getRandomNumber(4);
      console.log(randomNum);
      //create random number between 0-3
      //match up that number to a color and light up the color square in ui
      //increment step count - pattern count 
      //save random pattern in variable
      //allow user to match pattern - save user pattern in variable
      //compare values
      //if values === continue - increment step count - increment pattern count
        //else reset pattern count - step count remains (strict will be different)
      
    }

    public getRandomNumber(max:number) {
      return Math.floor(Math.random() * max) + 1;
    }
}
