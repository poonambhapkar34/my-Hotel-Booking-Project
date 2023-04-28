
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.css']
})
export class CustomSnackbarComponent {
  constructor(public dialogRef: MatDialogRef<CustomSnackbarComponent>,) {}
}
