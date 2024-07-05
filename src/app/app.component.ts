import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In-browser-markdown';
  data: any[] = [];
  

  constructor(private dataService: DataService) {
    this.dataService.getJsonData().subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
