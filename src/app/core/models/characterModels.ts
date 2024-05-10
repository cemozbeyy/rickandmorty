export interface CharacterResponse {
    info: CharacterInfo;
    results: Character[];
}

export interface CharacterInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface Character {
    created: Date;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: Location;
    name: string;
    origin: Location;
    species: string;
    status: string;
    type: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}
