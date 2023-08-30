import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss']
})
export class BreadcrumsComponent {

 
 @Input() componentHeading:String= '';
  @Input() main:String= '';
  @Input() sub:String= '';

}
