import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../models/tweets'

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() public tweet:Tweet;
  constructor() { }

  ngOnInit() {
  }

}
