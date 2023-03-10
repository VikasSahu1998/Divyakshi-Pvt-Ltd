import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  contactForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private api: ApiService,public dialog: MatDialog) { }




  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.nullValidator]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.nullValidator]),
      msg: new FormControl('', [Validators.required, Validators.nullValidator]),
    },
    );
  }

  adddetail() {
    if (this.contactForm.valid) {
      this.api.PostContact(this.contactForm.value)
        .subscribe({
          next: (res) => {
            alert("details added successfully");
            this.contactForm.reset();
          },
          error: () => {
            alert("Something went wrong ")
          }
        })
    }
  }

}
