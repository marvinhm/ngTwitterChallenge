import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../models/tweets';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets:Tweet[];
  date = new Date();
  constructor() { 
  }

  ngOnInit() {
    this.tweets = [
      {
        id: 1,
        text: "I don't even watch football, but that was a hell of a shot",
        user: "Ghetts",
        date: this.date
      },
      {
        id: 2,
        text: "Blukku Blukku",
        user: "D Double",
        date: this.date
      },
      {
        id: 3,
        text: "Don Perion, not very long",
        user: "Frisco",
        date: this.date
      },
      {
        id: 4,
        text: "Skid round the bend like Yoshi and Toad",
        user: "Skepta",
        date: this.date
      },
      {
        id: 5,
        text: "KilloffKilly",
        user: "President T",
        date: this.date
      },
    ]
  }

}
