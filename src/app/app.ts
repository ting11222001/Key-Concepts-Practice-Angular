import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Detail1 } from './detail1/detail1';
import { Detail2 } from './detail2/detail2';
import { Detail3 } from './detail3/detail3';
import { Detail4 } from './detail4/detail4';
import { Detail5 } from './detail5/detail5';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Detail1, Detail2, Detail3, Detail4, Detail5],
  template: `
    <div>
      <button style="margin: 5px" (click)="start=true">Start</button>
      <button (click)="start=false">Stop</button>
    </div>
    @if(start === true) {
      <div>
        <!-- <app-detail-1></app-detail-1> -->
        <!-- <app-detail-2></app-detail-2> -->
        <!-- <app-detail-3></app-detail-3> -->
        <!-- <app-detail-4></app-detail-4> -->
        <app-detail-5></app-detail-5>
      </div>
    }
  `,
  styles: ``
})
export class App {
  protected title = 'Key-Concepts-Practice-Angular';
  start = false;
}
