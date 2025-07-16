import { Component } from '@angular/core';
import { interval, Subscription, take } from 'rxjs';

/**
Notes:

1. interval(1000)
Creates an Observable that emits numbers (0, 1, 2, 3, ...) every 1000 milliseconds (1 second).

2. .pipe(take(4))
Modifies the stream: Only the first 4 numbers will be emitted (0, 1, 2, 3).

After the 4th value, the Observable completes and stops emitting.

Automatically unsubscribes for you after the 4th emission.

3. .subscribe(tickCount => {...})
Starts the Observable and lets you react to each value as it comes in.

tickCount will be 0, then 1, then 2, then 3 (one per second).

Each time a value is emitted:

this.tick += 1; increases your local counter variable.

console.log(tickCount); prints out the value (0, 1, 2, 3).

4. this.sub = ...
You save the subscription into this.sub, so you could manually unsubscribe later (if you wanted).

In this specific example, manual unsubscription is not strictly necessary, because take(4) will auto-unsubscribe after 4 values.


 */

@Component({
  selector: 'app-detail-2',
  imports: [],
  template: `
    <p>***Detail example 2:***</p>
    <div>
      Tick: {{ tick }}
    </div>
  `,
  styles: ``
})
export class Detail2 {
  tick = 0;

  ngOnInit(): void {
    interval(1000).pipe(
      take(4)
    ).subscribe(
        tickCount => {
          this.tick += 1;
          console.log(tickCount);
        }
    );
  }
}
