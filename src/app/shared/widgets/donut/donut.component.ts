import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
@Input() data =  [];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {

        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Contents of Highsoft\'s weekly fruit delivery'
        },
        subtitle: {
            text: '3D donut in Highcharts'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series:  this.data
    },

   HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
  new Event('resize')
  );
  }, 300);
  }
}
