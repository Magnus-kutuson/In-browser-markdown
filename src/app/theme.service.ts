import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkLight:boolean = true
  constructor() { }
  switchTheme(){
    this.darkLight = !this.darkLight
    // console.log(this.darkLight)
  }
}
