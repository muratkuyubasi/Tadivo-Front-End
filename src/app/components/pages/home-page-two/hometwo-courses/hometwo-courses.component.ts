import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-courses',
    templateUrl: './hometwo-courses.component.html',
    styleUrls: ['./hometwo-courses.component.scss']
})
export class HometwoCoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}