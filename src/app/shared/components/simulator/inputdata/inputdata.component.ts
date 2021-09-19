import { Component, OnInit } from '@angular/core';
import sampleData from "../../../data/data.json";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.scss']
})
export class InputdataComponent implements OnInit {
  visible: boolean = true;
  regionData: any = sampleData;
  superficieInput = new FormControl('');
  provinciaInput = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

}
