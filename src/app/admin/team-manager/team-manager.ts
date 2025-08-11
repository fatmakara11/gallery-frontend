import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/teamservice';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-manager',
  standalone: false,
  templateUrl: './team-manager.html',
  styleUrls: ['./team-manager.scss']
})
export class TeamManager implements OnInit {
  teams: Team[] = [];  // Takım listesi
  newTeam: Team = { name: '' };  // Yeni takım için sadece name var
  editMode: boolean[] = [];  // Hangi takım düzenleniyor

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.fetchTeams();
  }

  fetchTeams() {
    this.teamService.getAllTeams().subscribe(data => {
      this.teams = data;
      this.editMode = new Array(data.length).fill(false);
    });
  }

  addTeam() {
    if (!this.newTeam.name) return;

    this.teamService.saveTeam(this.newTeam).subscribe(() => {
      this.newTeam = { name: '' };
      this.fetchTeams();
    });
  }

  deleteTeam(id: number) {
    this.teamService.deleteTeam(id).subscribe(() => {
      this.fetchTeams();
    });
  }

  enableEdit(index: number) {
    this.editMode = this.editMode.map((_, i) => i === index);
  }

  saveEdit(index: number) {
    const team = this.teams[index];
    this.teamService.updateTeam(team.id!, team).subscribe(() => {
      this.editMode[index] = false;
      this.fetchTeams();
    });
  }
  removeEmployee(teamId: number, employeeId: number) {
    this.teamService.removeEmployeeFromTeam(teamId, employeeId).subscribe(() => {
      this.fetchTeams(); // Listeyi yenile
    });
  }

}
