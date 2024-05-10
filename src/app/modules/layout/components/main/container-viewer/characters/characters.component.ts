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

    constructor(private characterService: CharactersService) {
        characterService.getAllCharacters().subscribe(a => {
            this.getAllCharacters = a.results

        })
    }

    ngOnInit() { }
}