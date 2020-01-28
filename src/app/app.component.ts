import { Component,Input,OnInit ,OnDestroy,OnChanges} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit,OnDestroy{

  constructor(){
console.log("constructor called");
  

  }
  
    ngOnChanges() {
      console.log("AppComponent: OnChanges");
    }

    ngOnInit() {
      console.log("AppComponent: OnInit");
    }

    ngDoCheck() {
      console.log("AppComponent: DoCheck");
    }

    ngAfterContentInit() {
      console.log("AppComponent: AfterContentInit");
    }

    ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
    }
 
    ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
    }
 
    ngAfterViewChecked() {
      console.log("AppComponent:AfterViewChecked");
    }
 
    ngOnDestroy() {
      console.log("AppComponent:OnDestroy");
    }
}

