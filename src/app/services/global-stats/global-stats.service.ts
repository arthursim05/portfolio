import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalStatsService {

    private _isSplashAnimationPlayed: boolean = false;
    
    constructor() {
        if(location.pathname != "/") {
            this._isSplashAnimationPlayed = true;
        }
    }

    public get isSplashAnimationPlayed(): boolean {
        return this._isSplashAnimationPlayed;
    }
    
    public set isSplashAnimationPlayed(value: boolean) {
        this._isSplashAnimationPlayed = value;
    }
}
