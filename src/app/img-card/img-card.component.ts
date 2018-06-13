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
  image = true;

  public button: Button = {
    text: 'Cachorro?',
    color: 'primary',
    disabled: false
  };

  constructor(private dogService:DogService ) { }

  ngOnInit() {
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
    } else {
      this.generateSrc();
    }
  }
  public generateSrc(): void {
    
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
      return;
    }
    this.isImageLoading = true;

    this.dogService.getRandomDog()
      .subscribe((response:DogImage) => {
          if (response.status !== "success") {
            console.log('Looks like there was a problem. ' + response.status);
          } else {
            this.src = response.message;
          }
          this.isImageLoading = false;
        }, error => {
          this.isImageLoading = false;
           console.log(error);
        });
  }

}
