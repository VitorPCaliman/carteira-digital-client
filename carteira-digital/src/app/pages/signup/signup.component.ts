import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  nome: FormControl,
  cpf: FormControl,
  contaOrigem: FormControl,
  email: FormControl,
  senha: FormControl,
  senhaConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.signupForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
      contaOrigem: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      senhaConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.signup(this.signupForm.value.nome, this.signupForm.value.cpf, this.signupForm.value.contaOrigem,  this.signupForm.value.email, this.signupForm.value.senha).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate(){
    this.router.navigate([""])
  }
}