import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent {
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
