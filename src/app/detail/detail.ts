import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  imports: [],
  template: `
    <div>
      Tick: {{ tick }}
      Second Tick: {{ secondTick }}
    </div>
  `,
  styles: ``
})
export class Detail {
  tick = 0;
  secondTick = 0;
}
