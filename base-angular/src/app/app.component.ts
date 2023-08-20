import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'base-angular';

  //hostlistner only run on all of the screen not in particular part for that we have to use hostbinding
  //it only takes 2 parameter 1==>> event type like click and mouse enter etc.. 2==>> dom event like below in code
  // run only just below function to it like display in this case not other ones.
  @HostListener('click', ['$event'])
  display() {
    alert('HII FROM HOST LISTNER');
  }
}
