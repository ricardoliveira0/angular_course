import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        this.data = data;
        this.init();
      });
  }

  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.displayCharts());
      }, 1000);
    }
  }

  displayCharts(): void {
    this.displayPieChart();
    this.display3DPieChart();
    this.displayBarChart();
    this.displayLineChart();
    this.displayColumnChart();
    this.displayDonutChart();
  }

  displayPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.getDataTable(), this.getOptions());
  }

  display3DPieChart(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['is3D'] = true;
    chart.draw(this.getDataTable(), options);
  }

  displayBarChart(): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);
   
    chart.draw(this.getDataTable(), this.getOptions());
  }

  displayLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.getDataTable(), this.getOptions());
  }

  displayColumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.getDataTable(), this.getOptions());
  }

  displayDonutChart(): void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['pieHole'] = 0.4;
    chart.draw(this.getDataTable(), options);
  }

  getDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Month');
    data.addColumn('number', 'Amount');
    data.addRows(this.data);

    return data;
  }

  getOptions(): any {
    return {
      'title': 'Amount of orders at the first semester',
      'width': 400,
      'height': 300
    };
  }

}
