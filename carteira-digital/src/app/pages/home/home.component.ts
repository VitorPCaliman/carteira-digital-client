import { Component } from '@angular/core';
import { Transferencia } from '../../models/transferencia';
import { Usuario } from '../../models/usuario';
import { TransferenciaService } from '../../services/transferencia.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TransferenciaFormComponent } from "../../components/transferencia-form/transferencia-form.component";
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { ExtratoListComponent } from "../../components/extrato-list/extrato-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TransferenciaFormComponent, UserCardComponent, NavBarComponent, ExtratoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  usuario?: Usuario;
  transferencias: Transferencia[] = [];
  showingTransferenciaForm = false;
  showingExtrato = false;

  constructor(
    private loginService  : LoginService,
    private transferenciaService: TransferenciaService,
    private router: Router,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    const userEmail = sessionStorage.getItem('auth-name');
    if (userEmail) {
    this.loginService.getUsuarioByEmail(userEmail).subscribe(
      usuario => this.usuario = usuario,
      error => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    );
  } else {
    this.toastService.error("Nenhum usuário logado! Faça login para acessar esta página");
    this.router.navigate(["login"]);
  }
  }

  showTransferenciaForm() {
    this.showingTransferenciaForm = true;
    this.showingExtrato = false;
  }

  showExtrato() {
    if (this.usuario) {
      this.transferenciaService.consultarExtrato(this.usuario.contaOrigem).subscribe(
        transferencias => {
          this.transferencias = transferencias;
          this.showingExtrato = true;
          this.showingTransferenciaForm = false;
        }
      );
    }
  }

  agendarTransferencia(transferencia: Transferencia) {
    this.transferenciaService.agendarTransferencia(transferencia).subscribe(
      response => {
        this.showingTransferenciaForm = false;
        this.toastService.success("Transferência agendada com sucesso!");
        this.ngOnInit();
      },
      error => {
        if (error.status === 400) {
          this.toastService.error(error.error.error);
        } else {
          this.toastService.error("Erro inesperado! Tente novamente mais tarde.");
        }
      }
    );
  }

}
