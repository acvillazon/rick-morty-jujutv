import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { from, of } from 'rxjs';
import { Character } from 'src/app/interfaces/Character';
import { CharacterResponse } from 'src/app/interfaces/CharactersResponse';
import { Episode } from 'src/app/interfaces/Episode';
import { Location } from 'src/app/interfaces/Location';
import { RickMortyApiService } from 'src/app/services/rick-morty-api.service';

import { CardCharacterComponent } from './card-character.component';

let location: Location = {
  id: 6,
  name: 'Interdimensional Cable',
  type: 'TV',
  dimension: 'unknown',
  residents: [
    'https://rickandmortyapi.com/api/character/20',
    'https://rickandmortyapi.com/api/character/28',
    'https://rickandmortyapi.com/api/character/29',
    'https://rickandmortyapi.com/api/character/34',
    'https://rickandmortyapi.com/api/character/49',
    'https://rickandmortyapi.com/api/character/51',
    'https://rickandmortyapi.com/api/character/54',
    'https://rickandmortyapi.com/api/character/121',
    'https://rickandmortyapi.com/api/character/126',
    'https://rickandmortyapi.com/api/character/129',
    'https://rickandmortyapi.com/api/character/134',
    'https://rickandmortyapi.com/api/character/136',
    'https://rickandmortyapi.com/api/character/145',
    'https://rickandmortyapi.com/api/character/157',
    'https://rickandmortyapi.com/api/character/173',
    'https://rickandmortyapi.com/api/character/184',
    'https://rickandmortyapi.com/api/character/205',
    'https://rickandmortyapi.com/api/character/207',
    'https://rickandmortyapi.com/api/character/214',
    'https://rickandmortyapi.com/api/character/222',
    'https://rickandmortyapi.com/api/character/223',
    'https://rickandmortyapi.com/api/character/224',
    'https://rickandmortyapi.com/api/character/225',
    'https://rickandmortyapi.com/api/character/250',
    'https://rickandmortyapi.com/api/character/254',
    'https://rickandmortyapi.com/api/character/260',
    'https://rickandmortyapi.com/api/character/264',
    'https://rickandmortyapi.com/api/character/266',
    'https://rickandmortyapi.com/api/character/275',
    'https://rickandmortyapi.com/api/character/277',
    'https://rickandmortyapi.com/api/character/279',
    'https://rickandmortyapi.com/api/character/312',
    'https://rickandmortyapi.com/api/character/314',
    'https://rickandmortyapi.com/api/character/315',
    'https://rickandmortyapi.com/api/character/316',
    'https://rickandmortyapi.com/api/character/317',
    'https://rickandmortyapi.com/api/character/318',
    'https://rickandmortyapi.com/api/character/334',
    'https://rickandmortyapi.com/api/character/351',
    'https://rickandmortyapi.com/api/character/358',
    'https://rickandmortyapi.com/api/character/367',
    'https://rickandmortyapi.com/api/character/370',
    'https://rickandmortyapi.com/api/character/373',
    'https://rickandmortyapi.com/api/character/403',
    'https://rickandmortyapi.com/api/character/406',
    'https://rickandmortyapi.com/api/character/407',
    'https://rickandmortyapi.com/api/character/408',
    'https://rickandmortyapi.com/api/character/409',
    'https://rickandmortyapi.com/api/character/410',
    'https://rickandmortyapi.com/api/character/411',
    'https://rickandmortyapi.com/api/character/412',
    'https://rickandmortyapi.com/api/character/413',
    'https://rickandmortyapi.com/api/character/414',
    'https://rickandmortyapi.com/api/character/415',
    'https://rickandmortyapi.com/api/character/416',
    'https://rickandmortyapi.com/api/character/417',
    'https://rickandmortyapi.com/api/character/418',
    'https://rickandmortyapi.com/api/character/457',
    'https://rickandmortyapi.com/api/character/458',
    'https://rickandmortyapi.com/api/character/459',
    'https://rickandmortyapi.com/api/character/709',
    'https://rickandmortyapi.com/api/character/711',
  ],
  url: 'https://rickandmortyapi.com/api/location/6',
  created: '2017-11-10T13:09:09.102Z',
};

let episode: Episode = {
  id: 10,
  name: 'Close Rick-counters of the Rick Kind',
  air_date: 'April 7, 2014',
  episode: 'S01E10',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/3',
    'https://rickandmortyapi.com/api/character/4',
    'https://rickandmortyapi.com/api/character/5',
    'https://rickandmortyapi.com/api/character/7',
    'https://rickandmortyapi.com/api/character/14',
    'https://rickandmortyapi.com/api/character/15',
    'https://rickandmortyapi.com/api/character/18',
    'https://rickandmortyapi.com/api/character/19',
    'https://rickandmortyapi.com/api/character/21',
    'https://rickandmortyapi.com/api/character/22',
    'https://rickandmortyapi.com/api/character/27',
    'https://rickandmortyapi.com/api/character/39',
    'https://rickandmortyapi.com/api/character/53',
    'https://rickandmortyapi.com/api/character/77',
    'https://rickandmortyapi.com/api/character/78',
    'https://rickandmortyapi.com/api/character/79',
    'https://rickandmortyapi.com/api/character/82',
    'https://rickandmortyapi.com/api/character/83',
    'https://rickandmortyapi.com/api/character/84',
    'https://rickandmortyapi.com/api/character/85',
    'https://rickandmortyapi.com/api/character/86',
    'https://rickandmortyapi.com/api/character/103',
    'https://rickandmortyapi.com/api/character/113',
    'https://rickandmortyapi.com/api/character/118',
    'https://rickandmortyapi.com/api/character/119',
    'https://rickandmortyapi.com/api/character/152',
    'https://rickandmortyapi.com/api/character/164',
    'https://rickandmortyapi.com/api/character/177',
    'https://rickandmortyapi.com/api/character/209',
    'https://rickandmortyapi.com/api/character/215',
    'https://rickandmortyapi.com/api/character/232',
    'https://rickandmortyapi.com/api/character/242',
    'https://rickandmortyapi.com/api/character/274',
    'https://rickandmortyapi.com/api/character/290',
    'https://rickandmortyapi.com/api/character/294',
    'https://rickandmortyapi.com/api/character/295',
    'https://rickandmortyapi.com/api/character/298',
    'https://rickandmortyapi.com/api/character/299',
    'https://rickandmortyapi.com/api/character/329',
    'https://rickandmortyapi.com/api/character/330',
    'https://rickandmortyapi.com/api/character/339',
    'https://rickandmortyapi.com/api/character/349',
    'https://rickandmortyapi.com/api/character/359',
    'https://rickandmortyapi.com/api/character/381',
    'https://rickandmortyapi.com/api/character/389',
    'https://rickandmortyapi.com/api/character/405',
    'https://rickandmortyapi.com/api/character/424',
    'https://rickandmortyapi.com/api/character/425',
    'https://rickandmortyapi.com/api/character/426',
    'https://rickandmortyapi.com/api/character/427',
    'https://rickandmortyapi.com/api/character/428',
    'https://rickandmortyapi.com/api/character/429',
    'https://rickandmortyapi.com/api/character/430',
    'https://rickandmortyapi.com/api/character/431',
    'https://rickandmortyapi.com/api/character/432',
    'https://rickandmortyapi.com/api/character/433',
    'https://rickandmortyapi.com/api/character/434',
    'https://rickandmortyapi.com/api/character/663',
  ],
  url: 'https://rickandmortyapi.com/api/episode/10',
  created: '2017-11-10T12:56:34.747Z',
};

let character: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
    'https://rickandmortyapi.com/api/episode/4',
    'https://rickandmortyapi.com/api/episode/5',
    'https://rickandmortyapi.com/api/episode/6',
    'https://rickandmortyapi.com/api/episode/7',
    'https://rickandmortyapi.com/api/episode/8',
    'https://rickandmortyapi.com/api/episode/9',
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/11',
    'https://rickandmortyapi.com/api/episode/12',
    'https://rickandmortyapi.com/api/episode/13',
    'https://rickandmortyapi.com/api/episode/14',
    'https://rickandmortyapi.com/api/episode/15',
    'https://rickandmortyapi.com/api/episode/16',
    'https://rickandmortyapi.com/api/episode/17',
    'https://rickandmortyapi.com/api/episode/18',
    'https://rickandmortyapi.com/api/episode/19',
    'https://rickandmortyapi.com/api/episode/20',
    'https://rickandmortyapi.com/api/episode/21',
    'https://rickandmortyapi.com/api/episode/22',
    'https://rickandmortyapi.com/api/episode/23',
    'https://rickandmortyapi.com/api/episode/24',
    'https://rickandmortyapi.com/api/episode/25',
    'https://rickandmortyapi.com/api/episode/26',
    'https://rickandmortyapi.com/api/episode/27',
    'https://rickandmortyapi.com/api/episode/28',
    'https://rickandmortyapi.com/api/episode/29',
    'https://rickandmortyapi.com/api/episode/30',
    'https://rickandmortyapi.com/api/episode/31',
    'https://rickandmortyapi.com/api/episode/32',
    'https://rickandmortyapi.com/api/episode/33',
    'https://rickandmortyapi.com/api/episode/34',
    'https://rickandmortyapi.com/api/episode/35',
    'https://rickandmortyapi.com/api/episode/36',
    'https://rickandmortyapi.com/api/episode/37',
    'https://rickandmortyapi.com/api/episode/38',
    'https://rickandmortyapi.com/api/episode/39',
    'https://rickandmortyapi.com/api/episode/40',
    'https://rickandmortyapi.com/api/episode/41',
    'https://rickandmortyapi.com/api/episode/42',
    'https://rickandmortyapi.com/api/episode/43',
    'https://rickandmortyapi.com/api/episode/44',
    'https://rickandmortyapi.com/api/episode/45',
    'https://rickandmortyapi.com/api/episode/46',
    'https://rickandmortyapi.com/api/episode/47',
    'https://rickandmortyapi.com/api/episode/48',
    'https://rickandmortyapi.com/api/episode/49',
    'https://rickandmortyapi.com/api/episode/50',
    'https://rickandmortyapi.com/api/episode/51',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('CardCharacterComponent', () => {
  let component: CardCharacterComponent;
  let fixture: ComponentFixture<CardCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCharacterComponent],
      providers: [RickMortyApiService],
      imports: [HttpClientModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.character=character;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('called the "getLocation" function should return an object with information about the location', () => {
    spyOn(component.rickMorty, 'getByUrl').and.returnValue(of(location));
    component.getLocation();
    expect(component.character.locationDetails).toBe(location);
  });

  it('called the "getFirstEpisode" function should return an object with information about the first episode', () => {
    spyOn(component.rickMorty, 'getByUrl').and.returnValue(of(episode));
    component.getFirstEpisode();
    expect(component.character.firstAppearance).not.toBe(null);
  });
});
