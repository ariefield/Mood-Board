import { Component, OnInit } from '@angular/core';
import { Panel } from '../panel'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Constants
  dashboardWidth = 800;
  dashBoardHeight = 600;
  sideLength = 200;
  //Variables
  panels = [];
  selectedPanel;

  constructor() {
   }

  ngOnInit() {
    // Initialize values here
    var numX = this.dashboardWidth / this.sideLength;
    var numY = this.dashBoardHeight / this.sideLength;
    var totalNumPanels = numX*numY;
    for (var i=0;i<totalNumPanels;i++)
    {
      let panel = new Panel();
      panel.id = i;
      panel.left = this.determineLeftLocation( i, numX );
      panel.top = this.determineTopLocation( i, numX );
      this.panels.push( panel );
    }
    this.sideLength = this.sideLength;
  }

  //Private functions
  private determineLeftLocation( id: number, numX: number )
  {
    return (id % numX) * this.sideLength;
  }

  private determineTopLocation( id: number, numX: number )
  {
    return Math.floor(id / numX) * this.sideLength;
  }

  private getRandomColor()
  {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private swapPanels( panel1:Panel, panel2:Panel)
  {
    var left = panel1.left;
    var top = panel1.top;
    panel1.left = panel2.left
    panel1.top = panel2.top;
    panel2.left = left
    panel2.top = top;
  }

  //Public functions
  public setRandomColor( panel:Panel )
  {
    panel.colour = this.getRandomColor();
  }

  public beginDragging( panel:Panel )
  {
    this.selectedPanel = panel;
  }

  public dragReleased( panel:Panel )
  {
    if ( panel == this.selectedPanel )
    {
      this.selectedPanel = null;
    }
    else
    {
      this.swapPanels(panel, this.selectedPanel)
    }
  }

}
