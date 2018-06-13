import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  public API:string = "https://dog.ceo/api/breeds/image/random";
  constructor(private http: HttpClient) {
  }

  getRandomDog() {
    return this.http.get(this.API);
  }

}
