import { Component, OnInit, } from '@angular/core';
import { SettingsDialogComponent } from 'src/app/shared/settings-dialog/settings-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
   
  }

  onSettings(){
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '500px',
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }

}
