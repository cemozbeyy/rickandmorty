import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from 'src/app/core/models/characterModels';
import { MainService } from 'src/app/core/services/main.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rck-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.scss']
})

export class CharactersComponent implements OnInit {

    getAllCharacters: Character[] = []
    showCharacterDetails: boolean = false;

    constructor(private characterService: CharactersService, private mainService: MainService) {
    }
    hideCharacters() {
        this.showCharacterDetails = true;
    }

    loadCharacters(filters?: any) {
        this.characterService.getAllCharacters().subscribe((response: any) => {
            this.getAllCharacters = response.results
                .map((character: any) => {
                    if (
                        (!filters.name || character.name.toLowerCase().includes(filters.name.toLowerCase())) && //isime göre
                        (!filters.type || character.type === filters.type) && // türe göre
                        (!filters.status || character.status === filters.status) && //yaşam durumuna göre
                        (!filters.gender || character.gender === filters.gender) //Cinsiyete göre
                    ) {
                        return character;
                    }
                    return null;
                })
                .filter((character: any) => character !== null); // null olmayanları filtreler
        });
    }

    ngOnInit() {
        this.loadCharacters();
        this.mainService.filters$.subscribe(filters => {
            this.loadCharacters(filters);
        });
        window.onpopstate = () => {
            this.showCharacterDetails = false
        };
    }

}