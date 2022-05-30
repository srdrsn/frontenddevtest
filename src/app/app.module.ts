import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
