import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  showSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

    console.log(message);
  }
}
