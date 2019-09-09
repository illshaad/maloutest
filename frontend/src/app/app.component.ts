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
    this.dataService.getData().subscribe(responseOn => {
      console.log(responseOn, 'mes donnés paris')
    this.dataService.getData_three().subscribe(responseTwo =>{
      console.log(responseTwo, 'mes donnés barcelone')
    
    this.dataService.getData_two().subscribe(responseThree => {
      console.log(responseThree, 'mes donnés rome');
    
      const paris = [];
      for(var a in responseOn['response']){
        paris.push(responseOn['response'].totalResults)
      }
      const rome = [];
      for(var b in responseTwo['response']){
        rome.push(responseTwo['response'].totalResults)
      }
      const barcelone = [];
      for(var c in responseThree['response']){
        barcelone.push(responseThree['response'].totalResults)
      }
      console.log(paris, 'test');
    
    const BarChart = new Chart('barChart', {
    type: 'bar',
    data: {
     datasets: [{
         label: 'Paris',
         data: paris ,
         backgroundColor: [
             'rgba(83, 66, 209, 1)',
          
         ],
         borderColor: [
             'rgba(83, 46, 209, 1)',
         ],
         borderWidth: 1,
         
     },
     {
      label: 'Rome',
      data: rome ,
      backgroundColor: [
          'rgba(197, 48, 73, 1)',
         
      ],
      borderColor: [
          'rgba(197, 68, 73, 1)',
      ],
      borderWidth: 1,
      
  },
     {
       label :'Barcelone',
       data:barcelone,
       backgroundColor: [
        'rgba(124, 203, 143, 1)',
    ],
        borderColor: [
          'rgba(124, 253, 143, 1)',
         
        ],
        borderWidth : 1,
     }],
     labels: ['Nombres de restaurants par capital'],
    }, 
    options: {
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
  }) 
  })
  }
}
