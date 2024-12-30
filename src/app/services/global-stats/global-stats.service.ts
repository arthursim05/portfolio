import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalStatsService {

    private _isSplashAnimationPlayed: boolean = false;
    
    constructor() { }

    public get isSplashAnimationPlayed(): boolean {
        return this._isSplashAnimationPlayed;
    }
    
    public set isSplashAnimationPlayed(value: boolean) {
        this._isSplashAnimationPlayed = value;
    }
}
