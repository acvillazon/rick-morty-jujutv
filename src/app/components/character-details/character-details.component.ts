import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  public character:Character={};
  constructor(public dialogRef: MatDialogRef<CharacterDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public character$: any) {
      console.log("char",location);
      this.character=character$;
    }

  ngOnInit(): void {
  }

}
