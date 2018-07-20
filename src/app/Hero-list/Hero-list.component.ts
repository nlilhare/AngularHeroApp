import { Component, Output } from "@angular/core";

import { Hero } from "../Shared/Hero";
import {HeroService}from "../Shared/Hero.service";
import { Router } from "@angular/router";

@Component({
    selector: "heroList",
    templateUrl: "Hero-list.component.html",
    styleUrls: ["Hero-list.component.css"]
})

export class HeroList
{
    isactive:boolean=false;
    isShowHeroDetails:boolean=false;
    constructor(private HeroService:HeroService,private router:Router){}
    selectedHero: Hero;
  /*   @Output() heroDetails = new EventEmitter<heroDetai:Hero>();
    */ 
    heros = this.HeroService.HeroDB;
    onSelected(Hero: Hero) 
    {
        this.isactive=true;
        this.selectedHero = Hero;
        console.log("user selected  "+Hero.name);
        
    }
    showHeroDetails(user_selectedHero:Hero){
        this.isShowHeroDetails=true;
        console.log("Show details called  "+user_selectedHero.name);
        this.HeroService.selectedHero.emit(user_selectedHero);
        this.router.navigate(["heroDetails"]);
   
    }
}