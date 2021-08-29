import { Component, OnInit } from '@angular/core';
import sampleData from '../../data/data.json'
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  visible: boolean = true;
  regionData: any = sampleData;
  superficie = new FormControl('');
  provincia = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
