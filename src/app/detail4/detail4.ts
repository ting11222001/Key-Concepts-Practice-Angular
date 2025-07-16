import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

/**
 * Notes:
 * DestroyRef can be used with takeUntilDestroyed.
 * DestroyRef needs to be added in the injection context.
 * DestroyRef notifies takeUntilDestroyed right before the component is destroyed, it
 * can be unsubscribed.
 */
@Component({
  selector: 'app-detail-4',
  imports: [],
  template: `
    <p>***Detail example 4:***</p>
    <div>
      Tick: {{ tick }}
    </div>
  `,
  styles: ``
})
export class Detail4 {
  tick = 0;
  destroyRef = inject(DestroyRef);

  tick$ = interval(1000).pipe(
    takeUntilDestroyed(this.destroyRef)
  ).subscribe(
    tickCount => {
      this.tick += 1;
      console.log(tickCount);
    }
  );
}
