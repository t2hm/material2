import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription, Subject } from 'rxjs/Rx';

@Component({
  selector: 'load-route-progress',
  template: `
    <div [ngSwitch]="loading | async">
        <template [ngSwitchCase]="true">
          loading
        </template>
        <template ngSwitchDefault>
            <ng-content></ng-content>
        </template>
    </div>
  `
})
export class LazyComponent {
  private subscription: Subscription;
  public loading: Subject<any> = new Subject();

  public constructor(private router: Router) {
   this.subscription = router.events.subscribe(s => {
     if (s instanceof NavigationStart) {
       this.loading.next(true);
     }
     if (s instanceof NavigationEnd) {
       setTimeout(() => this.loading.next(false), 1000);
     }
   });
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
