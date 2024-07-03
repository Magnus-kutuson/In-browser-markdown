import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'In-browser-markdown';
  data : any [] = [];

  constructor(private dataService:DataService){
    this.dataService.getJsonData().subscribe((res: any) =>{
      // alert(JSON.stringify(res));
      this.data = res; 
      console.log(this.data)
    });
  }
}
