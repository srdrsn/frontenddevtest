import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Invitation } from '../shared/invitation.model';
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
    @Inject(MAT_DIALOG_DATA) public data: Invitation,
    public formBuilder: FormBuilder
  ) {}

  OnNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    //check for validation, normally not needed but stackblitz isn't initializing material correctly
    this.invitationForm.markAllAsTouched;
    console.log(this.invitationForm.value);
    if (this.invitationForm.valid) {
      this.dialogRef.close(this.invitationForm.value);
    }
  }
}
