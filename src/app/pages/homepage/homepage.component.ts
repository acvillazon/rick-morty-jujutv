import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CharacterDetailsComponent } from 'src/app/components/character-details/character-details.component';
import { LocationDetailsComponent } from 'src/app/components/location-details/location-details.component';
import { CharacterResponse } from 'src/app/interfaces/CharactersResponse';
import { RickMortyApiService } from 'src/app/services/rick-morty-api.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public is_loading:boolean = false;
  public characters:CharacterResponse={
    info:null,
    results:[]
  };

  constructor(private rickMorty:RickMortyApiService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(page:number=1):void {
    this.is_loading=true;
    this.rickMorty.getCharacters(page).subscribe((Characters:CharacterResponse)=>{
      this.characters=Characters;
      this.is_loading=false;
      document.getElementById("navbar-head")?.scrollIntoView({ behavior: "smooth", block: "center" });
    },(err:any)=>{
      this.is_loading=false;
    });
  }

  changePage(page:PageEvent){
    if(!page)return;
    this.getCharacters(page.pageIndex+1);
  }
}
