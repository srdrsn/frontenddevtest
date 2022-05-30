import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from './form-dialog/dialog-data';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person: DialogData;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '650px',
      height: '750px',
      data: { data: this.person },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.person = result;
      console.log(this.person);
    });
  }
}
