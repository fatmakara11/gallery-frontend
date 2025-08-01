import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Stats } from '../../services/stats';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  standalone: false,
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  departmentCount = 0;
  teamCount = 0;
  employeeCount = 0;
  isBrowser: boolean;

  constructor(
    private statsService: Stats,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.statsService.getDepartmentCount().subscribe({
      next: count => this.departmentCount = count,
      error: err => console.error('Department count error:', err)
    });

    this.statsService.getTeamCount().subscribe({
      next: count => this.teamCount = count,
      error: err => console.error('Team count error:', err)
    });

    this.statsService.getEmployeeCount().subscribe({
      next: count => this.employeeCount = count,
      error: err => console.error('Employee count error:', err)
    });

    if (this.isBrowser) {
      this.loadEmployeeChart();
    }
  }

  loadEmployeeChart(): void {
    this.statsService.getEmployeeCountByDepartment().subscribe({
      next: data => this.renderPieChart(data),
      error: err => console.error('Pie chart data error:', err)
    });
  }

  renderPieChart(data: { [key: string]: number }): void {
    const labels = Object.keys(data);
    const values = Object.values(data);

    const canvas = document.getElementById('employeePieChart') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#C9CBCF', '#B3E283', '#E887FF', '#7EE3E5'
          ],
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: 'Employees by Department',
            font: { size: 18 }
          }
        }
      }
    });
  }
}




