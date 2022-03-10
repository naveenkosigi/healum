import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() public note:any;
  @ViewChild('card',{static:false}) card:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  handleMouseOverCardEvent():void{
    (this.card.nativeElement as HTMLElement).scrollIntoView({behavior:'smooth',block: 'center',inline: 'center'});
  }

}
