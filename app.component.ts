import { Component ,ViewEncapsulation, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /* to create variables */

  title:string;
  firstName: string;
  lastName:string;
  
  ngOnInit(){
  this.title =  'Property Binding';
  this.firstName = 'Navita';
  this.lastName = 'Kamble'
 
}
/* display values by clicking a button */

OnBtnClick(){
  alert(this.title+this.firstName+this.lastName);
}
    
  

}
