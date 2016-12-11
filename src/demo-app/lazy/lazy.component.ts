import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription, Subject } from 'rxjs/Rx';

@Component({
  selector: 'load-route-progress',
  template: `
    <div [ngSwitch]="loading | async">
        <template [ngSwitchCase]="true">
          <md-progress-circle mode="indeterminate"></md-progress-circle>
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
       this.loading.next(false);
     }
   });
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
