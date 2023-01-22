import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  public linktheme=   document.querySelector('#theme');
  constructor() { 
    
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linktheme?.setAttribute('href',url);
     console.log('servicio inicializado'); 
  }
  changetheme(theme:string){
    const url =`./assets/css/colors/${theme}.css`
     this.linktheme?.setAttribute('href',url);
     localStorage.setItem('theme',url);
      console.log(url);
   }
   checkcurrent(){
    const links= document.querySelectorAll('.selector');
    links.forEach(elem=>{
      elem.classList.remove('working');
      const btnTheme= elem.getAttribute('data-theme');
      const btnThemeurl= `./assets/css/colors/${btnTheme}.css`;
      const currentTheme= this.linktheme?.getAttribute('href');
      if(btnThemeurl===currentTheme){
        elem.classList.add('working');
      }
    })
    console.log(links);
  }

}
