import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';

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
export class ProjectsComponent implements AfterViewInit {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.PROJECTS);
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this._globalStates.checkBrowser() && window.scrollTo(0,1)
        }, 10);
    }
}
