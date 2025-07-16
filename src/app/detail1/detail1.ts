import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

/**
 * Notes:
 * Must add unsubscribe to make sure console won't keep console.log()
 */
@Component({
  selector: 'app-detail-1',
  imports: [],
  template: `
    <p>***Detail example 1:***</p>
    <div>
      Tick: {{ tick }}
    </div>
  `,
  styles: ``
})
export class Detail1 implements OnInit, OnDestroy {
  sub!: Subscription;
  tick = 0;

  ngOnInit(): void {
    this.sub = interval(1000).subscribe(
      tickCount => {
        this.tick += 1;
        console.log(tickCount);
      }
    ); 
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
