import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Invitation } from '../shared/invitation';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { InvitationService } from '../shared/invitation.service';

@Component({
  selector: 'form',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  person: Invitation;

  invitationForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl(0, Validators.required),
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
  ) {
    this.person = data;
  }

  OnNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log('test');
    this.dialogRef.close(this.invitationForm.value);
  }
}
