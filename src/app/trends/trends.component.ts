import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { CandidateService } from '../candidate.service';
import { EdudetailsService } from '../edudetails.service';
import { JoiningdetailsService } from '../joiningdetails.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor(private joiningdetailsservice : JoiningdetailsService,private edudetailsservice : EdudetailsService,private candidateservice:CandidateService) { }

  ngOnInit(): void {

    this.candidateservice.getcountPerYear().subscribe(data => {
      this.setBarGraphValues(data);
      console.log(data);
    })
    this.joiningdetailsservice.getCountPerLocation().subscribe(data =>{
      this.setSelectedChartValues(data);
      console.log(data);
    // })
    // this.joiningdetailsservice.getcountPerTechnology().subscribe(data =>{
    //   this.setTechnologyChartValues(data);
    //   console.log(data);
    // })

    // this.edudetailsservice.getcountPerCourse().subscribe(data =>{
    //   this.setCourseChartValues(data);
    //   console.log(data);
    })
  }

  // Bar-chart-Year Wise Joining
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of Candidates',

        },
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  };



barChartLabels: Label[] = [];
barChartType: ChartType = 'bar';
barChartLegend = true;
barChartPlugins = [];

barChartData: ChartDataSets[] =
  [{
    data: [],
    backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)','rgb(165,105,86)','rgb(215,55,86)'],
    label: 'Candidate Hired'
  }];


  setBarGraphValues(data : any) {
    for (const i in data) {
      console.log(data[i].city);
      console.log(data[i].id);
      this.barChartLabels.push(data[i].city);
      this.barChartData[0].data!.push(data[i].id);
    }
  }


  //Pie chart 1 --Location


slChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
  },
};


slChartLabels: Label[]=[];
//slChartData: number[]=[];
slChartType: ChartType = 'pie' ;     //'pie';
slChartLegend = true;

slChartData: ChartDataSets[] =
  [{
    data: [],
    backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)','rgb(165,105,86)','rgb(215,55,86)'],
  }];

setSelectedChartValues(data: any) {
  for (const i in data) {
  console.log(data[i].location);
  console.log(data[i].id);
  this.slChartLabels.push(data[i].location);
  this.slChartData[0].data!.push(data[i].id);
  }
  // this.slChartLabels = Object.keys(data);
  // this.slChartData = Object.values(data);
}



 //Pie chart 2 --Technology


 techChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
  },
};


techChartLabels: Label[]=[];
//slChartData: number[]=[];
techChartType: ChartType = 'doughnut' ;     //'pie';
techChartLegend = true;

techChartData: ChartDataSets[] =
  [{
    data: [],
    backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)'],
  }];

setTechnologyChartValues(data: any) {
  for (const i in data) {
  console.log(data[i].technology);
  console.log(data[i].id);
  this.techChartLabels.push(data[i].technology);
  this.techChartData[0].data!.push(data[i].id);
  }
  // this.slChartLabels = Object.keys(data);
  // this.slChartData = Object.values(data);
}


//Pie chart 3 --Course


courseChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
  },
};


courseChartLabels: Label[]=[];
//slChartData: number[]=[];
courseChartType: ChartType = 'polarArea' ;     //'pie';
courseChartLegend = true;

courseChartData: ChartDataSets[] =
  [{
    data: [],
    backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)'],
  }];

setCourseChartValues(data: any) {
  for (const i in data) {
  console.log(data[i].course);
  console.log(data[i].id);
  this.courseChartLabels.push(data[i].course);
  this.courseChartData[0].data!.push(data[i].id);
  }
  // this.slChartLabels = Object.keys(data);
  // this.slChartData = Object.values(data);
}





//Pie Chart2

  // dmdChartOptions: ChartOptions = {
  //   responsive: true,
  //   legend: {
  //     position: 'right',
  //   },
  //   tooltips: {
  //     enabled: true,
  //    mode: 'single',
  //     callbacks: {
  //       label: function (tooltipItems, data) {
  //         return ''+data.labels![tooltipItems.index!]+' '+data.datasets![0].data![tooltipItems.index!] + ' %';
  //       }
  //     }
  //   },
  // };

  // dmdChartLabels!: Label[];
  // dmdChartData!: number[];
  // dmdChartType: ChartType = 'pie';
  // dmdChartLegend = true;


  // setDmdChartValues(data: any) {
  //   for (const i in data) {
  //   this.dmdChartLabels.push(data[i].date);
  //   this.dmdChartData.push(data[i].id);
  //   }
 // }



}



// import { Component, OnInit } from '@angular/core';
// import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import { Label } from 'ng2-charts';
// import { JoiningdetailsService } from '../joiningdetails.service';

// @Component({
//   selector: 'app-trends',
//   templateUrl: './trends.component.html',
//   styleUrls: ['./trends.component.css']
// })
// export class TrendsComponent implements OnInit {

//   constructor(private joiningdetailsservice : JoiningdetailsService,) { }


//   barChartOptions: ChartOptions = {
//     responsive: true,
//     scales: {
//       yAxes: [{
//         scaleLabel: {
//           display: true,
//           labelString: 'Number of Candidates',

//         },
//         ticks: {
//           beginAtZero: true,
//           stepSize: 1
//         }
//       }]
//     }
//   };

// barChartLabels: Label[] = [];
// barChartType: ChartType = 'bar';
// barChartLegend = true;
// barChartPlugins = [];

// barChartData: ChartDataSets[] =
//   [{
//     data: [],
//     label: 'Candidate Hired',
//     //backgroundColor:['rgb(196,69,59)',]
//   }];

//   // // PIE CHART FOR DEMANDED SKILLS
//   dmdChartOptions: ChartOptions = {
//     responsive: true,
//     legend: {
//       position: 'right',
//     },
//     tooltips: {
//       enabled: true,
//       mode: 'single',
      
//     },
//   };

//   dmdChartLabels: Label[]=[];
//   dmdChartData: number[]=[];
//   dmdChartType: ChartType = 'pie';
//   dmdChartLegend = true;


//   // PIE CHART FOR SKILLS OF SELECTED ONBOARDEES
// slChartOptions: ChartOptions = {
//   responsive: true,
//   legend: {
//     position: 'right',
    
//   },
//   tooltips: {
//     enabled: true,
//     mode: 'single',
    
//   },
// };

// slChartLabels: Label[]=[];
// //slChartData: number[]=[];
// slChartType: ChartType = 'pie';
// slChartLegend = true;
// slChartData: ChartDataSets[] =
//   [{
//     data: [],
//     backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)'],
//   }]; 

//   ngOnInit(): void {

//     this.joiningdetailsservice.getcountPerYear().subscribe(data => {
//       this.setBarGraphValues(data);
//       this.setSelectedChartValues(data);
     
//       console.log(data);
//     })
    
//     // this.demandsservice.getcountPerYear().subscribe(data => {
//     //   console.log("Skill Data: ", Object.keys(data));
//     //   this.setDmdChartValues(data);
//     // })
//     // this.joiningdetailsservice.getSelectedSkillData().subscribe(data => {
//     //   console.log("Skill Data: ", Object.keys(data));
//     //   this.setSelectedChartValues(data);
//     // })
//   }

//   setBarGraphValues(data : any) {
//     for (const i in data) {
//       console.log(data[i].date);
//       console.log(data[i].id);
//       this.barChartLabels.push(data[i].date);
//       this.barChartData[0].data!.push(data[i].id);
//     }
//   }

//   setDmdChartValues(data:any) {
//     for (const i in data) {
//       console.log(data[i].date);
//       console.log(data[i].id);
//       this.slChartLabels.push(data[i].date);
//       this.slChartData[0].data!.push(data[i].id);

//     }
//    }
  //  setSelectedChartValues(data:any) {
  //   for (const i in data) {
  //     console.log(data[i].date);
  //     console.log(data[i].id);
  //     this.slChartLabels.push(data[i].date);
  //     this.slChartData[0].data!.push(data[i].id);

  //   }
  // //   this.slChartLabels = Object.keys(data);
  // //   this.slChartData = Object.values(data);
  // }

// }