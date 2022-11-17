import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url =
    'https://api.unsplash.com/photos/random/?client_id=y3QhgPohZ0tGwkaJGABmutUXNqd9ZFIqyOpbDK7st1Q';
  json: any;
  photoUrl = '';
  getImages() {
    return this.http.get(this.url).subscribe((data) => {
      this.json = data;
      console.log(data);
      this.photoUrl = this.json.urls.small;
    });
  }
}
