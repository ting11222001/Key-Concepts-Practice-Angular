import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

/**
 * Notes:
 * takeUntilDestroyed() can only be used within injection context.
 * Injection context: Code that runs during construction.
 */
@Component({
  selector: 'app-detail-3',
  imports: [],
  template: `
    <p>***Detail example 3:***</p>
    <div>
      Tick: {{ tick }}
    </div>
  `,
  styles: ``
})
export class Detail3 {
  tick = 0;

  tick$ = interval(1000).pipe(
    takeUntilDestroyed()
  ).subscribe(
    tickCount => {
      this.tick += 1;
      console.log(tickCount);
    }
  );
}
