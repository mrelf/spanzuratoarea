import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean = false;
  guessWord:string = '';

  receiveGuessWord($event) {
    this.guessWord = $event.toLowerCase();
    this.submitted = true;
  }
  resetGame() {
    this.submitted = false;
  }
}
