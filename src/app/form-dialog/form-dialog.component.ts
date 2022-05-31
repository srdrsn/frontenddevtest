import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data';
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
  person: DialogData;

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public formBuilder: FormBuilder
  ) {
    this.person = data;
  }

  OnNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log('test');
    this.dialogRef.close(false);
  }
}
