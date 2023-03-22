import { Component } from '@angular/core';

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
