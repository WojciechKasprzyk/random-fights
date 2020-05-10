import { Component, OnInit } from '@angular/core';
import { ScoreTable } from '../../interfaces/score-table';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss']
})
export class ScoreTableComponent implements OnInit {
  scoreTable: ScoreTable = {
    leftPlayer: 0,
    rightPlayer: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
