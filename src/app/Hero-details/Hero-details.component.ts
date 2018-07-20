import { Component, Input}from "@angular/core";
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
        this.HeroService.selectedHero.subscribe(
            (Hero:Hero)=> {this.hero=Hero,console.log("clled details"+this.hero.name)}
        )
       }
       

      /*  ngAfterViewInit()  {
        this.HeroService.selectedHero.subscribe(
            (Hero:Hero)=> {this.hero=Hero,console.log("clled details"+Hero.name)}
        )
          
       } */
        
       goToHeroList(){
        this.router.navigate(["herosList"]);
   
       }
      /*  ngOnChanges(changeRecord) { ... } */
    
}