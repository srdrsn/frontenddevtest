import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { Invitation } from './shared/invitation.model';
import { InvitationService } from './shared/invitation.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  invitation: Invitation = {
    name: '',
    gender: '',
    phone: '',
    email: '',
    alone: '',
    attending: null,
    amount: null,
  };

  constructor(
    private readonly invitationService: InvitationService,
    private readonly dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '600px',
      height: '750px',
      data: this.invitation,
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result?.attending) {
          this.postInvitation(result);
        }
      });
  }

  postInvitation(invitation: Invitation): void {
    // I had trouble adding the firebase dependencies in a proper way.
    // I'd like to add firebase using `ng add @angular/fire`. Don't know how to do it on stackblitz
    // this is normally where I would do post request, something like:
    /*
      this.invitationService.addInvitation(invitation)
    */
  }
}
