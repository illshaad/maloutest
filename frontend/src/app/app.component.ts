import { Component,OnInit } from '@angular/core';
import { DataService } from'../../src/app/data.service'
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent{

  title = 'Graphique Bar';
  BarChart=[];


  constructor(private dataService : DataService){}

 
  ngOnInit()
  {
    this.dataService.getData().subscribe(response => {
      // let name_restaurant =  data['response'].map(data => data.groups[0].items[0].venue.name);
      // let plurial_name = data['response'].map(data => data.categories[2])
      // let formattedAddress = data['response'].map(data => data.groups[0].items[0].formattedAddress)
      console.log(response, 'mes donnés')
  
    const BarChart = new Chart('barChart', {
    type: 'bar',
    data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [{
         label: '# of Votes',
         data: [1,4,19,50,6,15] ,
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Bar Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  })
  }
}
