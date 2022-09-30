import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { VillainService } from 'src/app/core/services/villain.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VillainStoreService } from 'src/app/store/villain-store.service';





@Component({
  selector: 'app-form-villain',
  templateUrl: './form-villain.component.html',
  styleUrls: ['./form-villain.component.css']
})
export class FormVillainComponent implements OnInit {

villainForm !: FormGroup
actionBtn : string = "Save"
  constructor(private formBuilder:FormBuilder,
     private villainService: VillainService,
     @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef:MatDialogRef<FormVillainComponent>
     ) { }

  ngOnInit(): void {
    this.villainForm = this.formBuilder.group(
      {
        realName: ['',Validators.required],
        supervillainName: ['',Validators.required],
        imageUrl: ['',Validators.required]
      }
    )

   if(this.editData) {
    this.actionBtn = "Update"
    this.villainForm.controls['realName'].patchValue(this.editData.realName)
    this.villainForm.controls['supervillainName'].patchValue(this.editData.supervillainName)
    this.villainForm.controls['imageUrl'].patchValue(this.editData.imageUrl)
   }
  }
addVillain() {
  if(!this.editData) {
    if(this.villainForm.valid) {
      this.villainService.addVillain(this.villainForm.value)
      .subscribe({
  next:(res)=>{
    alert("Villain added succesfully");
    this.villainForm.reset();
    
  },
  error:()=> {
    alert("Error,you made a mistake you stupid Fucker")
  }
  
      }) 
    }
   
  }
  else {
      this.updateVillain()
    } 
  
}
updateVillain() {
this.villainService.editVillain(this.villainForm.value,this.editData.id).subscribe({
  next: (res) => {
    alert("Update succefully");
    this.villainForm.reset()
    this.dialogRef.close('update');
  },
  error: () => {
    alert("Damn broo!!You really stupid!!")
  }
})

}
}
