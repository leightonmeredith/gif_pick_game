import { Component } from '@angular/core';
import { IPlayer } from '../players/player';

@Component({
    selector: 'app-gif-loader',
    templateUrl: './gif-loader.component.html'
})

export class GifLoaderComponent {
    pageTitle = 'gif Pick!';
    players: IPlayer[] = [
        {
            name: 'M',
            pass: 5,
            wins: 0
        }, {
            name: 'Tomb Raider',
            pass: 5,
            wins: 0
        }, {
            name: 'Marvo',
            pass: 5,
            wins: 0
        }, {
            name: 'Other',
            pass: 5,
            wins: 0
        },
    ];
}
