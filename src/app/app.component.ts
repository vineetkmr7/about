import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'about';
  loadingDots: string = '';
  interval;
  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.loadingDots.length === 3) {
        this.loadingDots = '';
      } else {
        this.loadingDots += '.';
      }
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }
}
