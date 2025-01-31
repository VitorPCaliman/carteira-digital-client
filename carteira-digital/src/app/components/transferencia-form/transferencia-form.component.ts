import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transferencia } from '../../models/transferencia';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transferencia-form',
  standalone: true,
  imports: [FormsModule ],
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

  onSubmit() {
    this.transferencia.contaOrigem = this.contaOrigem;
    this.onTransferencia.emit(this.transferencia);
  }
}
