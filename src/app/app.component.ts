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

    dialogRef.afterClosed().subscribe((result) => {
      this.postInvitation(result);
    });
  }

  postInvitation(invitation: Invitation): void {
    // stackblitz has troubles with adding firebase indepencies
    // this is normally where I would do post request, something like:
    /*
      this.invitationService.addInvitation(invitation)
    */
  }
}
