import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { MaterialModule } from './shared/material-module';
import { AppComponent } from './app.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@NgModule({
  declarations: [AppComponent, FormDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
