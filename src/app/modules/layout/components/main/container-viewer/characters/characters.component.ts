import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character, CharacterResponse } from 'src/app/core/models/characterModels';
import { MainService } from 'src/app/core/services/main.service';
import { Subject, Subscription } from 'rxjs';
import { FilterModel } from 'src/app/core/models/filterModel';

@Component({
    selector: 'rck-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.scss']
})

export class CharactersComponent implements OnInit {

    getAllCharacters: (Character | null)[] = [];
    showCharacterDetails: boolean = false;
    filtersSubscriptionDestroy?: Subscription

    constructor(private characterService: CharactersService, private mainService: MainService) {
    }
    hideCharacters() {
        this.showCharacterDetails = true;
    }

    loadCharacters(filters?: FilterModel) {
        this.characterService.getAllCharacters().subscribe((response: CharacterResponse) => {
            this.getAllCharacters = response.results
                .map((character: Character) => {
                    if (filters) {
                        if (
                            (!filters.name || character.name.toLowerCase().includes(filters.name.toLowerCase())) && //isime göre
                            (!filters.type || character.type === filters.type) && // türe göre
                            (!filters.status || character.status === filters.status) && //yaşam durumuna göre
                            (!filters.gender || character.gender === filters.gender) //Cinsiyete göre
                        ) {
                            return character;
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        return character
                    }

                })
                .filter((character: Character | null) => character !== null); // null olmayanları filtreler
        });
    }

    ngOnInit() {
        this.loadCharacters();
        this.filtersSubscriptionDestroy = this.mainService.filters$.subscribe(filters => {
            this.loadCharacters(filters);
        });
        window.onpopstate = () => {
            this.showCharacterDetails = false
        };
    }

    ngOnDestroy() {
        this.filtersSubscriptionDestroy?.unsubscribe()
    }
}