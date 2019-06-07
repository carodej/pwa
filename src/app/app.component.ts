import { Component, OnInit } from '@angular/core';
import { Photo, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Progressive Web App';
  photos: Photo[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetch().subscribe(
      (data: Photo[]) => {
        this.photos = data;
      },
      err => {
        throw new Error('err');
      }
    );
  }
}
