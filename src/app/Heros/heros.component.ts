import { Component } from "@angular/core";
import { Hero } from "../Shared/Hero";

@Component({
 selector:"heros",
 templateUrl:"heros.component.html",
 styleUrls:["heros.component.css"]
})
export class Heros{
   hero:Hero={
        id:1,
        name:"Nyra"
    }; 
  

}