import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  onAnchorClick ( ) {
    let x = document.querySelector("#actors");
    if (x){
        x.scrollIntoView();
    }
  }
}
