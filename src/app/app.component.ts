import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero App';
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
