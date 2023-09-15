import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-onboard-masters',
  templateUrl: './onboard-masters.component.html',
  styleUrls: ['./onboard-masters.component.scss']
})
export class OnboardMastersComponent {

  @ViewChild('myModal') modal: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  openModel(){
    console.log("OPEN");
    const modal = this.el.nativeElement.querySelector('#myModal');
    this.renderer.setStyle(modal, 'display', 'block');
    // const modelDiv = document.getElementById('myModal');
    // if(modelDiv!=null){
    //   modelDiv.style.display = 'block';

    // }
  }

  closeModel(){
    // this.modal.nativeElement.style.display = 'none';
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display = 'none';

    }
  }

}
