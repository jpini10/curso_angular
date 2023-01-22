import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-setings',
  templateUrl: './account-setings.component.html',
  styleUrls: ['./account-setings.component.css']
})
export class AccountSetingsComponent implements OnInit {
  public linktheme=   document.querySelector('#theme');

  constructor(private SettingService:SettingService) { }

  ngOnInit(): void {
     this.SettingService.checkcurrent();
  }
  changetheme(theme:string){
   this.SettingService.changetheme(theme);
   
  }
  
}
