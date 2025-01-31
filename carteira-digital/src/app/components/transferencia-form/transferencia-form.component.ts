import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transferencia } from '../../models/transferencia';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transferencia-form',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './transferencia-form.component.html',
  styleUrl: './transferencia-form.component.scss'
})
export class TransferenciaFormComponent {
  @Input() contaOrigem: string = '';
  @Output() onTransferencia = new EventEmitter<Transferencia>();

  transferencia: Transferencia = {
    contaOrigem: '',
    contaDestino: '',
    valor: 0,
    dataTransferencia: ''
  };

  erroContaDestino: string | null = null;

  onSubmit() {
    this.transferencia.contaOrigem = this.contaOrigem;
    this.onTransferencia.emit(this.transferencia);
  }

  validarContaDestino() {
    this.filtrarNumerosContaDestino();
    if (this.transferencia.contaDestino.length !== 10) {
      this.erroContaDestino = "Conta deve possuir exatamente 10 dígitos.";
    } else {
      this.erroContaDestino = null;
    }
  }

  filtrarNumerosContaDestino() {
    this.transferencia.contaDestino = this.transferencia.contaDestino.replace(/\D/g, '');
  }
}
