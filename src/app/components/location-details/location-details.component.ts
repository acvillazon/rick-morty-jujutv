import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/interfaces/Character';
import { Location } from 'src/app/interfaces/Location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  public location:Location={};
  constructor(public dialogRef: MatDialogRef<LocationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public character: any) {
      console.log("Location",location);
      this.location=character?.locationDetails
    }

  ngOnInit(): void {
    
  }

}
