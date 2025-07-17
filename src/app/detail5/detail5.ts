import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, Subject, Subscription, switchMap } from 'rxjs';

/**
 * Notes:
 * Subject: a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.
 * asObservable(): Creates a new Observable with this Subject as the source.
 * The dollar sign of startSecondTickSubject$: means it's just an Observable, not the data itself.
 * Note that the tear down logic only works to the operators ABOVE the takeUntilDestroyed() operator!
 * 
 * switchMap: If you press the reset button, throw away the old stopwatch and start a new one.
 * takeUntilDestroyed(): When you leave the room (destroy the component), throw away any running stopwatch—don’t let it tick in the empty room!
 * subscribe: This is what actually listens for each tick and responds by incrementing and logging.
 * 
 * Step-by-step logic:
 * 1. You emit a value to secondTickSubject (for example, by calling this.secondTickSubject.next(true);).
 * 2. This triggers startSecondTickSubject$ to emit a value.
 * 3. switchMap(() => interval(1200)):
 * Cancels any previous interval and starts a new one (an Observable that emits 0, 1, 2, ... every 1.2 seconds).
 * This new interval emits its first value (0) after 1.2 seconds, then 1 after another 1.2 seconds, and so on.
 * 4. Each time the interval emits a value:
 * The function inside .subscribe() runs.
 * this.tick increments by 1.
 * The current value (tickCount) is logged.
 * 
 * Subject:
 * 1. Emits only future values to subscribers.
 * 2. If nothing has been emitted yet, and someone subscribes, they get nothing until the next .next().
 * 3. Good when you only care about explicit, new "events" (e.g., user clicks, triggers, or actions).
 * 
 * BehaviorSubject:
 * 1. Remembers the latest value.
 * 2. When someone subscribes, they immediately get the latest value (even if it was emitted before they subscribed).
 * 3. Good for state that always needs a current value (like a form field, selected item, etc).
 */
@Component({
  selector: 'app-detail-5',
  imports: [],
  template: `
    <p>***Detail example 5:***</p>
    <div>
      Tick: {{ tick }}
      Second Tick: {{ secondTick }}
    </div>
  `,
  styles: ``
})
export class Detail5 implements OnInit {
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
    // takeUntilDestroyed() // here is incorrect
    switchMap(() => interval(1200)),
    takeUntilDestroyed() // here is correct
  ).subscribe(
    tickCount => {
      this.secondTick += 1;
      console.log('Second tickCount: ', tickCount);
    }
  );
}
