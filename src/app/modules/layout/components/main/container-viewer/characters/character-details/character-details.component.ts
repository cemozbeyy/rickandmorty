import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Character } from 'src/app/core/models/characterModels';
import { ApiHttpService } from 'src/app/core/services/api.service';
import { CharactersService } from '../characters.service';

@Component({
    selector: 'selector-name',
    templateUrl: 'character-details.component.html',
    styleUrls: ['character-details.component.scss']
})

export class CharacterDetailComponent implements OnInit {

    character$!: Observable<Character>;
    characterDetails!: Character
    constructor(private route: ActivatedRoute, private characterService: CharactersService, private apiService: ApiHttpService) { }

    ngOnInit() {

        this.character$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                const id = params.get('id')!;
                return this.characterService.getSingleCharacterDetails(id);
            })
        );
        this.character$.subscribe(getSingleCharacterDetails => {
            this.characterDetails = getSingleCharacterDetails
            console.log(this.characterDetails)
        })
    }
}