import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from 'src/app/core/services/api.service';
import { Character, CharacterResponse } from 'src/app/core/models/characterModels';

@Injectable({ providedIn: 'root' })
export class CharactersService {
    constructor(private apiService: ApiHttpService) { }

    getAllCharacters(): Observable<CharacterResponse> {
        return this.apiService.get<CharacterResponse>('/character');
    }
    getSingleCharacterDetails(id: string): Observable<Character> {
        return this.apiService.get(`/character/${id}`)
    }
}