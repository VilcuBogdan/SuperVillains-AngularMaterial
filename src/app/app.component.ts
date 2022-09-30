import { Dialog } from '@angular/cdk/dialog';
import { Component,OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormVillainComponent } from './components/form-villain/form-villain.component';
import { Villain } from './core/interfaces/villain.interface';
import { VillainService } from './core/services/villain.service';
import { VillainStoreService } from './store/villain-store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title = 'superVillains';
villains!: Villain[];
constructor(private dialog:MatDialog, private villainService: VillainService,
  private villainStoreService :VillainStoreService) {

}
  ngOnInit(): void {
    this.villainStoreService.villain$.subscribe((villains) => (
      this.villains =villains
    ));

  }

  openDialog(){
    this.dialog.open(FormVillainComponent, {
      width:'30%'
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.villainService.getVillains();
      }
    });


  }
}
