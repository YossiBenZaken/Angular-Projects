import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component  {
  choices: Array<string> = ['Rock', 'Paper', 'scissor'];
  you: string;
  computer: string;
  show = false;
  result: string;
  title = 'RockPaperScissor';
  choice(num: number) {
    this.show = true;
    this.you = this.choices[num];
    this.computer = this.choices[Math.floor(Math.random() * 81) % 3];
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
