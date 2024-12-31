import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { EducationCardComponent } from '../../components/education-card/education-card.component';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [
        EducationCardComponent,
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
}
