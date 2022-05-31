import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { Invitation } from './shared/invitation.model';
import { InvitationService } from './shared/invitation.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person: Invitation = {
    name: 'test',
    gender: 'tte',
    phone: 0,
    email: 't',
    alone: '',
    attending: null,
    amount: 0,
  };

  constructor(
    private readonly invitationService: InvitationService,
    private readonly dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '600px',
      height: '750px',
      data: this.person,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.person = result;
    });
  }
}
