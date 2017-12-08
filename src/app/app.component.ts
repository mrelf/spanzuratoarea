import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean = false;
  guessWord:string = '';
  countDown;
  counter: number = 30;
  alo;

  startTimer() {
    this.countDown = Observable.timer(0, 1000)
                                .map(tick => this.counter - tick)
                                .take(this.counter - 1)
                                .subscribe(tick => this.alo = tick);
  }

  receiveGuessWord($event) {
    this.guessWord = $event.toLowerCase();
    this.submitted = true;
    this.startTimer();
  }

  resetGame() {
    this.submitted = false;
    this.countDown.unsubscribe();
  }
}
