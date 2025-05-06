import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyContentInteractComponent } from './lazy-content-interact/lazy-content-interact.component';
import { LazyContentViewportComponent } from './lazy-content-viewport/lazy-content-viewport.component';

@Component({
  selector: 'app-defer-demo',
  imports: [
    CommonModule,
    LazyContentInteractComponent,
    LazyContentViewportComponent,
  ],
  templateUrl: './defer-demo.component.html',
  styles: [],
})
export class DeferDemoComponent {}
