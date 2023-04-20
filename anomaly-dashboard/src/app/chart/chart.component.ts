import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})




export class ChartComponent {


  constructor(){}
  ngOnInit():void{
    this.renderChart()
  }


  renderChart(){
    const ctx = document.getElementById('myChart');

  new Chart("scatter", {
    type: 'scatter',
    data: {
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        // label: '# of Votes',
        data: [{
          x: 10,
          y: 5
      }, {
          x: 15,
          y: 7
      },{
        x:1,
        y:10
      },{
        x:20,
        y:3
      }]

      }]
    },
    options: {
       scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
    }
  });
  }

}
