import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {

  Msgform: FormGroup | any;

  constructor(private formbuilder: FormBuilder,private toastr: ToastrService,
    private dialogref: MatDialogRef<FromComponent>,
    private api: ApiService) { }


  ngOnInit(): void {
    this.Msgform = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('', [Validators.required,]),
      PhoneNumber: new FormControl('', [Validators.required,]),
      
    });

  }

  adddetail() {
    // console.log(this.Msgform.value)
    if (this.Msgform.valid) {
      this.api.PostContact(this.Msgform.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
            // alert("details added successfully ");
            this.Msgform.reset();
            this.dialogref.close('save');
          },
          error: () => {
            this.toastr.error('Something is broken', 'Major Error In Server', { timeOut: 2000, });
            // alert("Something is broken");
          }
        })
    }
  }
}
