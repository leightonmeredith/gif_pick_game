import { Component } from '@angular/core';
import { IPlayer } from '../players/player';

@Component({
    selector: 'app-gif-loader',
    templateUrl: './gif-loader.component.html'
})

export class GifLoaderComponent {
    pageTitle = 'gif Off!';
    selectedGif = 'src/gifs/donkeyKong_intro.gif';
    gifImages: any[] = [
        'src/gifs/meerkat_sleepy.gif',
        'src/gifs/daveChappelle_run.gif',
        'src/gifs/girlBottle_drop.gif',
        'src/gifs/dogHop_stairs.gif',
        'src/gifs/bernie_boxing.gif',
        'src/gifs/kevinHart_stare.gif',
        'src/gifs/catTrip_baby.gif',
        'src/gifs/draymond_stare.gif',
        'src/gifs/draymond_stare2.gif',
        'src/gifs/baby_landing.gif',
        'src/gifs/parrot_beef.gif',
        'src/gifs/dogPaw_fail.gif',
        'src/gifs/owl_poop.gif',
        'src/gifs/sloane_ugh.gif',
        'src/gifs/catReject_kissing.gif',
        'src/gifs/puppySit_cat.gif',
        'src/gifs/falcon_stare.gif',
        'src/gifs/boy_no.gif',
        'src/gifs/nerd_yes.gif'
    ];

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

    getRandomGif(): void {
        this.selectedGif = this.gifImages[Math.floor(Math.random() * this.gifImages.length)];
        const index = this.gifImages.indexOf(this.selectedGif);
        this.gifImages.splice(index, 1);
    }
}
