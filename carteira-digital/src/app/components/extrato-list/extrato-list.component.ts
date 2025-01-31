import { Component, Input } from '@angular/core';
import { Transferencia } from '../../models/transferencia';

@Component({
  selector: 'app-extrato-list',
  standalone: true,
  imports: [],
  templateUrl: './extrato-list.component.html',
  styleUrl: './extrato-list.component.scss'
})
export class ExtratoListComponent {
  @Input() transferencias: Transferencia[] = [];
}
