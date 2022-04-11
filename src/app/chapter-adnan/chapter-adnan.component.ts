import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-adnan',
  templateUrl: './chapter-adnan.component.html',
  styleUrls: ['./chapter-adnan.component.css']
})
export class ChapterAdnanComponent implements OnInit {

  constructor() { }
  stage = 'default';
  ngOnInit(): void {

  }
  
  setStage(value: string){
    this.stage = value;
  }

}
