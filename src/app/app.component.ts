import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideNavBarComponent } from './components/aside-nav-bar/aside-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
