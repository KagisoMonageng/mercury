import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SideNavComponent } from "./shared/components/side-nav/side-nav.component";
import { NavComponent } from "./shared/components/nav/nav.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ordi-client';
 
  ngOnInit(): void {
    initFlowbite();
  }
}
