import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  li_1="Inicio";
  li_2="Categoria";
  li_3="Oferta";
  li_4="Ayuda";
}
