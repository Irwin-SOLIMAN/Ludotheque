import { Component } from '@angular/core';
import { Page } from '../../models/types/page.type';

@Component({
  selector: 'app-aside-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './aside-nav-bar.component.html',
  styleUrl: './aside-nav-bar.component.scss',
})
export class AsideNavBarComponent {
  pages: Page[] = [
    {
      id: 1,
      name: 'Page 1',
      icon: '',
    },
    {
      id: 2,
      name: 'Page 2',
      icon: '',
    },
    {
      id: 3,
      name: 'Page 3',
      icon: '',
    },
  ];
}
