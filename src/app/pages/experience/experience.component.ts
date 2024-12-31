import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [
        ExperienceCardComponent,
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    public appConfig = AppConfig;
    public assetPaths = AssetPaths;
}
