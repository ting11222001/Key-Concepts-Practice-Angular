import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Detail } from './detail/detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Detail],
  template: `
    <div>
      <button style="margin: 5px" (click)="start=true">Start</button>
      <button (click)="start=false">Stop</button>
    </div>
    @if(start === true) {
      <div>
        <app-detail></app-detail>
      </div>
    }
  `,
  styles: ``
})
export class App {
  protected title = 'Key-Concepts-Practice-Angular';
  start = false;
}
