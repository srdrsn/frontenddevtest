import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'form',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  invitationForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    attending: new FormControl('', Validators.required),
    amount: new FormControl(''),
    alone: new FormControl('', Validators.required),
  });

  get form(): { [key: string]: AbstractControl } {
    return this.invitationForm.controls;
  }

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    public formBuilder: FormBuilder
  ) {}

  save(): void {
    //check for validation, normally not needed but stackblitz isn't initializing material correctly
    this.invitationForm.markAllAsTouched;
    console.log(this.invitationForm.value);
    if (this.invitationForm.valid) {
      this.dialogRef.close(this.invitationForm.value);
    }
  }
}
