import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LeadBoardComponent} from './fragment/leadBoard/leadBoard.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
  }

  private leaderBoard() {
    this.dialog.open(LeadBoardComponent, {
      width: '80%',
      autoFocus: false
    });
  }

  private challenge() {
    this.router.navigate(['/questions']);
  }

}
