import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})


export class FinderComponent implements OnInit {

  searchText: string;
  opcion : string;

  @Output()
  eventoBuscar = new EventEmitter<{searchText: string, option: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange($event : any) {    
    this.opcion = $event.target.value;
  }
  buscarActor(){    
    if (this.opcion===undefined) {
      this.opcion='';
      alert('Selecciona una opcion');
    }
    else   this.eventoBuscar.emit({searchText: this.searchText, option: this.opcion});
  }
}
