import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material-module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent],
})
export class AppModule {}
