import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-fallback-ng-content-demo',
  
  imports: [CommonModule, CardComponent],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Fallback ng-content Demo</h2>
      
      <div class="space-y-6">
        <!-- Card with custom content -->
        <app-card>
          <h3 class="text-xl font-semibold mb-2">Custom Card Content</h3>
          <p class="text-gray-600">
            This is custom content passed to the card component.
          </p>
        </app-card>
        
        <!-- Card with fallback content -->
        <app-card></app-card>
      </div>
    </div>
  `,
  styles: []
})
export class FallbackNgContentDemoComponent {}
