import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
document: any;
isSidebarOpen: boolean = false;
isPopupOpen: boolean = false;


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
  constructor( public switchThemeService:ThemeService){}
  switchTheme(){
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
}


