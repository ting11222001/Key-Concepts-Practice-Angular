import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { count, interval, Subject, switchMap } from 'rxjs';

/**
 * Notes:
 * when the count() is put after takeUntilDestroyed():
 * First tickCount:  0
 * First tickCount:  1
 * Second tickCount: 2
 * First tickCount:  0
 * First tickCount:  1
 * First tickCount:  2
 * First tickCount:  3
 * First tickCount:  4
 * Second tickCount: 4
 */

@Component({
  selector: 'app-detail-6',
  imports: [],
  template: `
    <p>***Detail example 6:***</p>
    <div>
      Tick: {{ tick }}
      Second Tick: {{ secondTick }}
    </div>
  `,
  styles: ``
})
export class Detail6 {
tick = 0;
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(
      tickCount => {
        this.tick += 1;
        console.log('First tickCount: ', tickCount);
      }
    );
    this.secondTickSubject.next(true);
  }

  secondTick = 0;
  secondTickSubject = new Subject<Boolean>();
  startSecondTickSubject$ = this.secondTickSubject.asObservable();

  sub = this.startSecondTickSubject$.pipe(
    switchMap(() => interval(1200)),
    // count(),    // putting this here will not print and update the second tick count at all.
    takeUntilDestroyed(),
    count()    // only emit once when the stream completes and it emits the tick count.
  ).subscribe(
    tickCount => {
      this.secondTick += 1;
      console.log('Second tickCount: ', tickCount);
    }
  );
}
