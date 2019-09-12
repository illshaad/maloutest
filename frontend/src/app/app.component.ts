import { Component,OnInit } from '@angular/core';
import { DataService } from'../../src/app/data.service'
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent{

  title = '';
  BarChart= [] ;
  

  constructor(private dataService : DataService){}
  handleClick(event : Event){
    const sendDataFromBack = JSON.parse(localStorage.getItem('totalResult'))
    console.log(sendDataFromBack ,'PARSE JSONNN DATA');
    
    this.dataService.saveData(sendDataFromBack)
    .subscribe(data => {
      console.log(data , 'ma data send');
      
    });
     // handleClick(event : Event){
  //   this.dt.saveData(totalResults)
  //   .subscribe(data => {
  //   console.log(data, 'data save for mlab');
  //   });
  // }
  }
 
  ngOnInit()
  {
    
    this.dataService.getData()
    .subscribe(response_on => {
    this.dataService.getData_three()
    .subscribe(response_two =>{
    this.dataService.getData_two()
    .subscribe(response_three => {
      const dataParis = [response_on['response']].map(data => data.totalResults)
      const dataRome = [response_two['response']].map(data => data.totalResults)
      const dataMadrid = [response_three['response']].map(data => data.totalResults)
      localStorage.setItem('totalResult',JSON.stringify(`[${dataParis}, ${dataRome}, ${dataMadrid}]`))

    const BarChart = new Chart('barChart', {
    type: 'bar',
    data: {
     datasets: [{
      label: 'Paris',
      data: dataParis ,
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
      data: dataRome ,
      backgroundColor: [
        'rgba(197, 48, 73, 1)',
      ],
      borderColor: [
        'rgba(197, 68, 73, 1)',
      ],
      borderWidth: 1,
      },
     {
       label :'Madrid',
       data: dataMadrid ,
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
