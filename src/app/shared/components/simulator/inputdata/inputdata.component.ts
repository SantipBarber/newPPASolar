import { Component, OnInit } from '@angular/core';
import sampleData from "../../../data/data.json";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.scss']
})
export class InputdataComponent implements OnInit {
  visible: boolean = true;
  regionData: any = sampleData;
  simulatorForm: FormGroup;
  area: number | any;
  state: string | any;

  constructor(private fb: FormBuilder) {
    this.simulatorForm = this.fb.group({})
  }

  ngOnInit(): void {
    this.initForm()

  }

  private initForm(): void {
    this.simulatorForm = new FormGroup({
      superficieInput: new FormControl('', {validators: [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(3)]}),
      provinciaInput: new FormControl('', {validators: [Validators.required]})
    })
  }

  validDataAlert() {
    this.area = this.simulatorForm.controls['superficieInput'].value;
    this.state = this.simulatorForm.controls['provinciaInput'].value;

    Swal.fire({
      position: 'top-end',
      toast: true,
      icon: 'success',
      title: `Datos correctos: \n Area = ${this.area} \n Provincia = ${this.state}`,
      showConfirmButton: false,
      timer: 3000,
      width: '20rem',
      grow: 'row',
    })
  }



  isValidField(field: string): string {
    const validateField = this.simulatorForm?.get(field);
    return (!validateField?.valid && validateField?.touched) ? 'is-invalid' : validateField?.valid ? 'is-valid' : '';
  }


}
