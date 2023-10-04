import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export type DadosPessoaisFormGroup = FormGroup<{
  name: FormControl<string | null>;
}>;

@Component({
  selector: 'app-dados-pessoais-form',
  templateUrl: './dados-pessoais-form.component.html',
})
export class DadosPessoaisFormComponent implements OnInit, OnDestroy{
  form!: DadosPessoaisFormGroup;

  @Output()
  formReady = new EventEmitter<FormGroup>();
  @Output()
  removeForm = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
    this.formReady.emit(this.form);
  }

  ngOnDestroy(): void {
    this.removeForm.emit(true);
  }
}
