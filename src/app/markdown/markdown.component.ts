import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { DataService } from '../data.service';



@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
  document: any;
  inputValue: string = '';
  isSidebarOpen: boolean = false;
  isPopupOpen: boolean = false;
  data: any[] = [];


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    if (this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }
  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  confirmDelete() {
    // Implement your delete logic here
    console.log('Item deleted');
    this.closePopup();
  }
  constructor(public switchThemeService: ThemeService, private dataService: DataService) { }
  switchTheme() {
    //   if (this.darkLight) {
    //     this.darkLight = false
    //     console.log(this.darkLight)
    //     // debugger
    //   } else {
    //     // debugger
    //     this.darkLight = true
    //     console.log('else statement',this.darkLight)
    //   }
    console.log("this.darkLight");
  }
  ngOnInit(){
    this.dataService.getJsonData().subscribe(
      (res: any) => {
        this.data = res;
        // console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
   
  }
}


