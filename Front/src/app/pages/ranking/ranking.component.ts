import { Component, OnInit } from '@angular/core';
import { Team } from 'src/services/models';
import { CheckpointService } from '../../../services/services/checkpoint.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ranking',
  providers: [CheckpointService],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  team: Team;

  displayedColumns: string[] = ['rankingPosition', 'nameTeam', 'totalPoints'];
  dataSource: string[];
  constructor(private router: Router, private teamService: CheckpointService) {
    // this.team = new Team();
  }

  ngOnInit() {
  }

  test() {
    this.teamService.GetCheckpointsItems().subscribe(
      () => {
        alert('ok');
      },
      () => alert('pas ok')
    );
  }

}
