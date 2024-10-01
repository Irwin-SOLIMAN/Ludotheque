import { Component } from '@angular/core';
import { Page } from '../../models/types/page.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aside-nav-bar.component.html',
  styleUrl: './aside-nav-bar.component.scss',
})
export class AsideNavBarComponent {
  pages: Page[] = [
    {
      id: 1,
      name: 'Home',
      icon: '',
      path: '/',
    },
    {
      id: 2,
      name: 'Stats',
      icon: '',
      path: '/stats',
    },
  ];
}
