import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',

  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md p-6">
      <ng-content>
        <!-- Fallback content when no content is provided -->
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-2">Default Card Title</h3>
          <p class="text-gray-600">
            This is the default content that appears when no content is provided
            to the card component.
          </p>
        </div>
      </ng-content>
    </div>
  `,
  styles: [],
})
export class CardComponent {}
