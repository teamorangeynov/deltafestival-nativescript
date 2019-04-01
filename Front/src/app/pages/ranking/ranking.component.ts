import { Component, OnInit } from '@angular/core';
import { Team } from 'src/services/models';
import { TeamService } from '../../../services/services/team.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ranking',
  providers: [TeamService],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  team: Team;

  displayedColumns: string[] = ['rankingPosition', 'nameTeam', 'totalPoints'];
  dataSource: string[];
  constructor(private router: Router, private teamService: TeamService) {
    // this.team = new Team();
  }

  ngOnInit() {
  }

  test() {
    this.teamService.List().subscribe(
      () => {
        alert('ok');
      },
      () => alert('pas ok')
    );
  }

}
