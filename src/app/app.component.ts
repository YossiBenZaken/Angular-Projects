import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  choices: Array<string> = ['Rock', 'Paper', 'scissor'];
  you: string;
  computer: string;
  show = false;
  result: string;
  title = 'RockPaperScissor';
  choice(num: number) {
    this.show = true;
    this.you = this.choices[num];
    this.computer = this.choices[Math.round(Math.random() * 2)];
    if (this.you === this.computer) {
      this.result = 'Draw';
    } else if (
      this.you === this.choices[0] && this.computer === this.choices[1] ||
      this.you === this.choices[1] && this.computer === this.choices[2] ||
      this.you === this.choices[2] && this.computer === this.choices[0]) {
      this.result = 'You Lose';
    } else {
      this.result = 'You Win';
    }
  }
}
