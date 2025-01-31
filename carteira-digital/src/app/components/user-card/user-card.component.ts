import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() usuario?: Usuario;
}
