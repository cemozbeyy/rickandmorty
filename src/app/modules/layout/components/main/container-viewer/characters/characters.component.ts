import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from 'src/app/core/models/characterModels';

@Component({
    selector: 'rck-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.scss']
})

export class CharactersComponent implements OnInit {

    getAllCharacters: Character[] = []
    showCharacterDetails: boolean = false;

    constructor(private characterService: CharactersService) {
    }
    hideCharacters() {
        this.showCharacterDetails = true;
    }
    loadCharacters() {
        this.characterService.getAllCharacters().subscribe(response => {
            this.getAllCharacters = response.results;
        });
    }
    ngOnInit() {
        this.loadCharacters();
        window.onpopstate = () => {
            this.showCharacterDetails = false
        };
    }
}