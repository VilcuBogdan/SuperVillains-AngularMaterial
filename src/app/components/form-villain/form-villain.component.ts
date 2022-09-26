import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';



@Component({
  selector: 'app-form-villain',
  templateUrl: './form-villain.component.html',
  styleUrls: ['./form-villain.component.css']
})
export class FormVillainComponent implements OnInit {

villainForm !: FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.villainForm = this.formBuilder.group(
      {
        realName: ['',Validators.required],
        supervillainName: ['',Validators.required],
        imageUrl: ['',Validators.required]
      }
    )
  }
addVillain() {
  console.log(this.villainForm.value);
}
}
