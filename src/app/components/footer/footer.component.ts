import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data.enum';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public appConfig = AppConfig;
}
