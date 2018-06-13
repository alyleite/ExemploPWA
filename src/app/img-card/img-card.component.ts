import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';



class DogImage {
  message: string;
  status: string;
}

class Button { 
  text: string;
  disabled: boolean;
  color: string;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})

export class ImgCardComponent implements OnInit {

  public src: string;
  isImageLoading = false;

  public button: Button = {
    text: 'Cachorro?',
    color: 'primary',
    disabled: false
  };

  constructor(private dogService:DogService ) { }

  ngOnInit() {
    this.generateSrc();
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
    } else {
      this.generateSrc();
    }
  }
  public generateSrc(): void {
    this.isImageLoading = true;
    this.dogService.getRandomDog()
    .subscribe((resp:DogImage) => {
      this.src = resp.message;
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

}
