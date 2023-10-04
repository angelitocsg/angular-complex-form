import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export type EnderecosFormGroup = FormGroup<{
  street: FormControl<string | null>;
  city: FormControl<string | null>;
}>;

@Component({
  selector: 'app-enderecos-form',
  templateUrl: './enderecos-form.component.html',
})
export class EnderecosFormComponent implements OnInit, OnDestroy {
  form!: EnderecosFormGroup;

  @Output()
  formReady = new EventEmitter<FormGroup>();
  @Output()
  removeForm = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
    this.formReady.emit(this.form);
  }

  ngOnDestroy(): void {
    this.removeForm.emit(true);
  }
}
