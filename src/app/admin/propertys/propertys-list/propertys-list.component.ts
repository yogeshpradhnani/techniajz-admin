import { Component } from '@angular/core';
@Component({

  selector: 'app-propertys-list',
  
  templateUrl: './propertys-list.component.html',
  styleUrl: './propertys-list.component.scss'
})
export class PropertysListComponent {


  images: string[] = [
    'assets/images/login/1.jpg',
    'assets/images/login/2.jpg',
    'assets/images/login/3.jpg',
    'assets/images/login/4.jpg'
  ];
  currentImageIndex: number = 0;
  
  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }



}
