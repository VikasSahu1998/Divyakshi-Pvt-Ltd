import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FromComponent } from '../from/from.component';

import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-job-from',
  templateUrl: './job-from.component.html',
  styleUrls: ['./job-from.component.scss']
})
export class JobFromComponent {

  Jobform: FormGroup | any;

  constructor(private formbuilder: FormBuilder,private toastr: ToastrService,
    private dialogref: MatDialogRef<FromComponent>,
    private api: ApiService) { }


  ngOnInit(): void {
    this.Jobform = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
      text: new FormControl('', [Validators.required,]),
    });

  }

  adddetail() {
    // console.log(this.Msgform.value)
    if (this.Jobform.valid) {
      this.api.PostJob(this.Jobform.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
            // alert("details added successfully ");
            this.Jobform.reset();
            this.dialogref.close('save');
          },
          error: () => {
            this.toastr.error('everything is broken', 'Major Error In Server', { timeOut: 2000, });
            // alert("everything is broken");
          }
        })
    }
  }

}
