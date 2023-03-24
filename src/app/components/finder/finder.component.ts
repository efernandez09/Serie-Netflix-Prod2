import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  searchText: string;
  @Output()
  eventoBuscar = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  buscarActor() {    
    this.eventoBuscar.emit(this.searchText)
  }

}
