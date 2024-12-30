import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [
        CommonModule,
        ProjectCardComponent,
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
}
