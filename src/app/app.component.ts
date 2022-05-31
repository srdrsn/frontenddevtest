import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from './form-dialog/dialog-data';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person: DialogData = {
    name: '',
    gender: '',
    phone: 0,
    email: '',
    alone: '',
    attending: null,
    amount: 0,
  };
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '650px',
      height: '750px',
      data: this.person,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
