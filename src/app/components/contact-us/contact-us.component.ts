import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

  submit(form:any){
      var name = form.name;
      console.log(name);

      var email = form.email;
      console.log(email);

      var number = form.number;
      console.log(number);

      var subject = form.subject;
      console.log(subject);

      var message = form.message;
      console.log(message);
  }
}