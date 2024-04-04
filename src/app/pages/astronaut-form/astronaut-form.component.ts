import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-astronaut-form',
  templateUrl: './astronaut-form.component.html',
  styleUrl: './astronaut-form.component.scss'
})
export class AstronautFormComponent {
  astronautForm: FormGroup | undefined;

  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.astronautForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      missions: ['', [Validators.required, Validators.min(1)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      acceptTermsHousing: [false, Validators.requiredTrue],
      acceptTermsHealth: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.astronautForm && this.astronautForm.valid) {
      console.log(this.astronautForm.value);
      // Aqui você pode enviar os dados para o serviço ou fazer o que for necessário
    }
  }
}
