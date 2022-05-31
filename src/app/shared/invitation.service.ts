import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Invitation } from './invitation.model';

@Injectable({
  providedIn: 'root',
})
export class InvitationService {
  constructor(private readonly firestore: AngularFirestore) {}
  AddInvitation(invitation: Invitation) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('invitations')
        .add(invitation)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
}
