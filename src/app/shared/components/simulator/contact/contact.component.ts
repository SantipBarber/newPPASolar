import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {DataService} from "./services/data.service";
import {ActivatedRoute} from "@angular/router";
import TERMS from '/src/app/shared/data/terms.json'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ DataService ]
})
export class ContactComponent implements OnInit {
  /**
   * Al intentar implementar el contact form con su contructor me rompe la APP
   * @param fb
   * @param dataSvc
   */
  contactForm: FormGroup | any;
  private isEmail = /\S+@\S+\.\S+/;
  private area: number = 0;
  private state: string = '';

  constructor(private fb: FormBuilder, private dataSvc:DataService, private route: ActivatedRoute,) {
    this.contactForm = this.fb.group({})
  }

  ngOnInit(): void {
    this.initForm()
    this.route.queryParams.subscribe(params => {
      this.area = params.area;
      this.state = params.state;
    })
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
      phone: new FormControl('', Validators.required),
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      rules: ['', [Validators.requiredTrue]],
    })
  }

  async onSave(): Promise<void>{
    if(this.contactForm?.valid){
      console.log(this.contactForm.value);
      try {
        const formValue = this.contactForm.value;
        await this.dataSvc.onSaveContact(formValue, this.area, this.state);
        Swal.fire('Message sent!!!', 'See soon!', 'success');
        this.contactForm.reset();
      } catch (error) {
        alert(error);

      }

    } else {
      Swal.fire('Oooops...', 'Please check the form data', 'error');
    }
  }

  useRules(){
    Swal.fire({
        html : '<div style="text-align: justify">' + TERMS['terms']['html'] + '</div>',
        icon : 'info',
        width : '85%',
        position : 'center',

      }
    )
  }

  isValidField(field: string): string {
    const validateField = this.contactForm?.get(field);
    return (!validateField?.valid && validateField?.touched) ? 'is-invalid' : validateField?.valid ? 'is-valid' : '';
  }

  notRequiredValue(field: string): string {
    return this.contactForm?.get(field)?.value ? 'is-valid' : '';
  }


}
