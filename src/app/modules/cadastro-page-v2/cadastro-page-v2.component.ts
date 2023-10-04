import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-page-v2',
  templateUrl: './cadastro-page-v2.component.html',
})
export class CadastroPageV2Component implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({});

    this.form.valueChanges.subscribe((value) => {
      console.log(JSON.stringify(value));
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      // Focus the first invalid input
      // Note: this is just a very simple implementation for demo purposes
      // and does not cover all edge cases
      const invalidInput = document.querySelector('input.ng-invalid');
      invalidInput instanceof HTMLElement && invalidInput.focus();
      return;
    }

    this.form.disable();
    console.log('Submitting form...!', this.form.value);
  }

  addChildForm(name: string, formGroup: FormGroup): void {
    console.log(name);

    this.form.addControl(name, formGroup);
  }

  removeChildForm(name: string): void {
    this.form.removeControl(name);
  }
}
