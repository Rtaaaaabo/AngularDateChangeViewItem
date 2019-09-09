import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  date = new Date();  // 現在日時を得る
  message: string;

  constructor() {
    this.message = '';
  }

  ngOnInit() {
    if (this.date.getHours() < 6) {
      this.message = 'おやすみ';
    } else if (this.date.getHours() < 11) {
      this.message = 'おはよう';
    } else if (this.date.getHours() < 17) {
      this.message = 'こんにちわ！';
    } else {
      this.message = 'こんばんわ！';
    }
  }

}
