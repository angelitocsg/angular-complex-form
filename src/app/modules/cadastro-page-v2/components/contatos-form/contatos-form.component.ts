import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

export type ContatosFormGroup = FormGroup<{
  celular: FormControl<string | null>;
  email: FormControl<string | null>;
}>;

@Component({
  selector: 'app-contatos-form',
  templateUrl: './contatos-form.component.html',
})
export class ContatosFormComponent implements OnInit, OnDestroy {
  form!: ContatosFormGroup;

  @Output()
  formReady = new EventEmitter<FormGroup>();
  @Output()
  removeForm = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.formReady.emit(this.form);
  }

  ngOnDestroy(): void {
    this.removeForm.emit(true);
  }
}
