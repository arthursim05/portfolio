import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { menuOpenCloseAnimation, menuOpenCloseHeightAnimation } from '../../../animations/bruger-menu.animation';
import { RoutesData } from '../../../enums/routes-data.enum';
import { AppConfig } from '../../../enums/app-data.enum';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule,
    ],
    animations: [
        menuOpenCloseAnimation,
        menuOpenCloseHeightAnimation,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public navbarOpen = false;
    public linksData = RoutesData;
    public appData = AppConfig;

    constructor(
        private readonly _router: Router
    ) {
        _router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.navbarOpen && this.toggleNavbar();
            }
        });
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        if (window.innerWidth > 1024) {
            this.navbarOpen = false;
        }
    }

    public resumeDownload(): void {
        console.log("logic to download resume");
        
    }

}
