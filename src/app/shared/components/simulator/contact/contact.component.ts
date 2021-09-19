import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /**
   * Al intentar implementar el contact form con su contructor me rompe la APP
   * @param fb
   * @param dataSvc
   */
  contactForm: FormGroup | any;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({})
  }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]]
    })
  }

  async onSave(): Promise<void>{
    if(this.contactForm?.valid){
      console.log(this.contactForm.value);
      try {
        const formValue = this.contactForm.value;
        // await this.dataSvc.onSaveContact(formValue);
        Swal.fire('Message sent!!!', 'See soon!', 'success');
        this.contactForm.reset();
      } catch (error) {
        alert(error);

      }

    } else {
      Swal.fire('Oooops...', 'Please check the form data', 'error');
    }
  }

  isValidField(field: string): string {
    const validateField = this.contactForm?.get(field);
    return (!validateField?.valid && validateField?.touched) ? 'is-invalid' : validateField?.valid ? 'is-valid' : '';
  }

  notRequiredValue(field: string): string {
    return this.contactForm?.get(field)?.value ? 'is-valid' : '';
  }


}
