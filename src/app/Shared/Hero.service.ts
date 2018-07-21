import {Hero}from "./Hero";
import { EventEmitter, Output } from "@angular/core";
export class HeroService{
   
   HeroDB:Hero[]=[{ id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }];
    hero:Hero;
 @Output() selectedHero=new EventEmitter<Hero>();
 setSelectedHero(user_selectedHero:Hero){
    this.selectedHero.emit(user_selectedHero);
 }
 getHero(){
 
    this.selectedHero.subscribe((Hero:Hero)=> {this.hero=Hero})
    return this.hero;
}
}