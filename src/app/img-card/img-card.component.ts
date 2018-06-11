import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';



class DogImage {
  message: string;
  status: string;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})

export class ImgCardComponent implements OnInit {

  public src: string;

  constructor(private dogService:DogService ) { }

  ngOnInit() {
    this.generateSrc();
  }
  public generateSrc(): void {
    this.dogService.getRandomDog()
    .subscribe((resp:DogImage) => {
      this.src = resp.message;
    });

    // this.src = this.image.api + this.image.message + 
    //   '?size=' + this.image.fontsize +
    //   '&ts=' + Date.now();
  }

}
