import { Component, OnInit } from '@angular/core';
import { Panel } from '../panel'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Declare types here
  panels = [];
  sideLength: number;

  constructor() {
   }

  ngOnInit() {
    // Initialize values here
    for (var i=1;i<=18;i++)
    {
      this.panels.push(new Panel())
    }
    this.sideLength = 180;
  }

  //Functions
  public setRandomColor( panel:Panel )
  {
    panel.colour = this.getRandomColor();
  }

  public getRandomColor()
  {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
