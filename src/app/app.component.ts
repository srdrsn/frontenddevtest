import { Component, VERSION } from '@angular/core';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.matDialog.open(FormComponent, {
      width: '250px',
      height: '300px',
    });
  }
}
