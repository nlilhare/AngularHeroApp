import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:"header",
    templateUrl:"Header.component.html"
})
export class HeaderComponent{
    
    isActive:boolean=false;
    constructor(private router:Router){}
    loadHeroList(){
        this.isActive=true;
      this.router.navigate(["herosList"]);
    
    }
    showDashboard(){
        this.isActive=false;
      this.router.navigate([""]);
      
    }
    
}