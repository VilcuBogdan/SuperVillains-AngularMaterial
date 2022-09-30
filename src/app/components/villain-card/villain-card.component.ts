import { Component, OnInit,Input } from '@angular/core';
import { Villain } from 'src/app/core/interfaces/villain.interface';
import { FormVillainComponent } from '../form-villain/form-villain.component';
import { MatDialog } from '@angular/material/dialog';
import { VillainService } from 'src/app/core/services/villain.service';
import { VillainStoreService } from 'src/app/store/villain-store.service';
@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent implements OnInit {
@Input()
villain!: Villain;
  constructor(private dialog :MatDialog ,
     private villainService:VillainService,
     private villainStoreService : VillainStoreService
     ) { }

  ngOnInit(): void {
    this.villainStoreService.villain$.subscribe((villain) => 
    (villain = villain))
  }

  editVillain() {
    this.dialog.open(FormVillainComponent, {
      width: '30%',
      data:this.villain
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.villainService.getVillains();
      }
    })
  }

  deleteVillain(id:number) {
 this.villainService.deleteVillain(id).subscribe(() => (
  this.villainStoreService.deleteVillain(id)
 ))
  }

}
