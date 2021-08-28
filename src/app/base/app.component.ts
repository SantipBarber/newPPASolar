import {Component} from '@angular/core';
import sampleData from '../shared/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PPA Solar';
  regionData: any = sampleData;

  ngOnInit(){
  }
}

