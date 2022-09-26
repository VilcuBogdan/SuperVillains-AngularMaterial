import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormVillainComponent } from './components/form-villain/form-villain.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superVillains';

constructor(private dialog:MatDialog) {}

  openDialog(){
    this.dialog.open(FormVillainComponent, {
      width:'30%'
    });

  }
}
