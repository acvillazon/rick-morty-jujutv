import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/interfaces/Character';
import { Episode } from 'src/app/interfaces/Episode';
import { RickMortyApiService } from 'src/app/services/rick-morty-api.service';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { LocationDetailsComponent } from '../location-details/location-details.component';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input()
  character!: Character;
  @Output() characterEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(public rickMorty:RickMortyApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getFirstEpisode();
  }

  getFirstEpisode(){
    if(!this.character?.episode) return
    this.rickMorty.getByUrl(this.character.episode[0]).subscribe((episode:Episode)=> this.character.firstAppearance = episode.name);
  }

  getLocation(){
    if(!this.character?.location) return
    this.rickMorty.getByUrl(this.character.location.url).subscribe((location:Location)=> {
      this.character.locationDetails = location;
      this.dialog.open(LocationDetailsComponent,{
        width: '300px',
        data:this.character,
        panelClass:"class-container-generic-alert"
      });
    });
  }

  getCharacter(){
    if(!this.character.url) return
    this.dialog.open(CharacterDetailsComponent,{
      width: '400px',
      data:this.character,
      panelClass:"class-container-generic-alert"
    });
  }

}
