import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Heros}from "./Heros/heros.component";
import { AppComponent } from './app.component';
import {FormsModule}from "@angular/forms";
import{HeroList}from "./Hero-list/Hero-list.component";
import{HeroDetails}from "./Hero-details/Hero-details.component";
import{HeroService}from "./Shared/Hero.service";
import{RouterModule, Routes}from "@angular/router";
import{HeaderComponent}from "./Header/Header.component";

const appRoutes:Routes=[
  {  path:'',component:AppComponent},
  {  path:'home',component:AppComponent},
  {  path:'heroDetails',component:HeroDetails},
  {    path:"herosList",component:HeroList  }
];
@NgModule({
  declarations: [
    AppComponent,Heros,HeroList,HeroDetails,HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
