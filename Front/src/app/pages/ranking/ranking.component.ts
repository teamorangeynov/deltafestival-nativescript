import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  displayedColumns: string[] = ['rankingPosition', 'nameTeam', 'totalPoints'];
  dataSource: string[];
  constructor() { }

  ngOnInit() {
  }



}
