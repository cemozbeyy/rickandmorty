import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rck-sidenav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
    currentUrl: string = "";

    private routerEventsSubscription: Subscription;//for router listening

    constructor(private router: Router) {
        //mevcut url'e göre tıklanan linki active eder
        this.currentUrl = this.router.url;

        //router olaylarını dinler ve NavigationEndde url değişiklikliği tamamlandığında dinleyerek currentUrl değişkenini günceller.
        this.routerEventsSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentUrl = event.url;
            }
        });
    }

    ngOnInit() { }


    ngOnDestroy() {
        if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
        }
    }
}