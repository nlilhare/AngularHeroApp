import { Component, Input,OnInit}from "@angular/core";
import{Hero}from "../Shared/Hero";
import{HeroService}from "../Shared/Hero.service";
import { Router } from "@angular/router";
@Component({
    selector:"heroDetails",
    templateUrl:"Hero-details.component.html",
    styleUrls:["Hero-details.component.css"]
})
export class HeroDetails 
{
    hero:Hero;
    constructor(private HeroService:HeroService,private router:Router){
       
       }
       ngAfterContentInit()  {
        /* this.HeroService.selectedHero.subscribe(
            (Hero:Hero)=> {this.hero=Hero,console.log("called details"+Hero.name)}
        )
            */this.hero=this.HeroService.getHero();
       }
        
       goToHeroList(){
        this.router.navigate(["herosList"]);
   
       }
      /*  ngOnChanges(changeRecord) { ... } */
    
}